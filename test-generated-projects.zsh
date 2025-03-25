#!/bin/zsh

# Script to test generated projects by:
# 1. Checking if the server starts up correctly
# 2. Verifying the correct properties are applied to SpTheme in App.tsx

# Default values
PARENT_DIR="cli-test-projects"
START_INDEX=1
END_INDEX=50
SERVER_TIMEOUT=10  # Seconds to wait for server to start
BROWSER_OPEN=false  # Whether to open browser for visual inspection
PORT_START=5173     # Starting port for dev servers

# Help function
show_help() {
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  -s, --start INDEX       Start from configuration #INDEX (default: 1)"
  echo "  -e, --end INDEX         End at configuration #INDEX (default: 50)"
  echo "  -d, --directory DIR     Parent directory containing projects (default: cli-test-projects)"
  echo "  -t, --timeout SECONDS   Seconds to wait for server to start (default: 10)"
  echo "  -b, --browser           Open browser for visual inspection (default: false)"
  echo "  -p, --port PORT         Starting port for dev servers (default: 5173)"
  echo "  -h, --help              Show this help message"
  echo ""
  echo "Examples:"
  echo "  $0                      Test all projects"
  echo "  $0 -s 10 -e 20          Test projects #10 through #20"
  echo "  $0 -d my-test-dir       Test projects in my-test-dir"
  echo "  $0 -b                   Open browser for visual inspection"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -s|--start)
      START_INDEX=$2
      shift 2
      ;;
    -e|--end)
      END_INDEX=$2
      shift 2
      ;;
    -d|--directory)
      PARENT_DIR=$2
      shift 2
      ;;
    -t|--timeout)
      SERVER_TIMEOUT=$2
      shift 2
      ;;
    -b|--browser)
      BROWSER_OPEN=true
      shift
      ;;
    -p|--port)
      PORT_START=$2
      shift 2
      ;;
    -h|--help)
      show_help
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      show_help
      exit 1
      ;;
  esac
done

# Validate arguments
if [[ ! -d "$PARENT_DIR" ]]; then
  echo "Error: Directory $PARENT_DIR does not exist"
  exit 1
fi

# Define all configurations (same as in test-cli-commands.zsh)
declare -A configs
configs[1]="default-app"
configs[2]="explicit-defaults --theme-scale both --theme-color both --system spectrum"
configs[3]="spectrum-app --system spectrum"
configs[4]="both-themes --theme-color both"
configs[5]="both-scales --theme-scale both"
configs[6]="large-scale --theme-scale large"
configs[7]="medium-scale --theme-scale medium"
configs[8]="dark-theme --theme-color dark"
configs[9]="light-theme --theme-color light"
configs[10]="spectrum-two-app --system spectrum-two"
configs[11]="express-app --system express"
configs[12]="large-dark --theme-scale large --theme-color dark"
configs[13]="large-light --theme-scale large --theme-color light"
configs[14]="medium-dark --theme-scale medium --theme-color dark"
configs[15]="medium-light --theme-scale medium --theme-color light"
configs[16]="dark-spectrum-two --theme-color dark --system spectrum-two"
configs[17]="light-spectrum-two --theme-color light --system spectrum-two"
configs[18]="dark-express --theme-color dark --system express"
configs[19]="light-express --theme-color light --system express"
configs[20]="large-spectrum-two --theme-scale large --system spectrum-two"
configs[21]="medium-spectrum-two --theme-scale medium --system spectrum-two"
configs[22]="large-express --theme-scale large --system express"
configs[23]="medium-express --theme-scale medium --system express"
configs[24]="large-dark-spectrum --theme-scale large --theme-color dark --system spectrum"
configs[25]="large-light-spectrum --theme-scale large --theme-color light --system spectrum"
configs[26]="medium-dark-spectrum --theme-scale medium --theme-color dark --system spectrum"
configs[27]="medium-light-spectrum --theme-scale medium --theme-color light --system spectrum"
configs[28]="large-dark-spectrum-two --theme-scale large --theme-color dark --system spectrum-two"
configs[29]="large-light-spectrum-two --theme-scale large --theme-color light --system spectrum-two"
configs[30]="medium-dark-spectrum-two --theme-scale medium --theme-color dark --system spectrum-two"
configs[31]="medium-light-spectrum-two --theme-scale medium --theme-color light --system spectrum-two"
configs[32]="large-dark-express --theme-scale large --theme-color dark --system express"
configs[33]="large-light-express --theme-scale large --theme-color light --system express"
configs[34]="medium-dark-express --theme-scale medium --theme-color dark --system express"
configs[35]="medium-light-express --theme-scale medium --theme-color light --system express"
configs[36]="large-both-spectrum --theme-scale large --theme-color both --system spectrum"
configs[37]="medium-both-spectrum --theme-scale medium --theme-color both --system spectrum"
configs[38]="large-both-spectrum-two --theme-scale large --theme-color both --system spectrum-two"
configs[39]="medium-both-spectrum-two --theme-scale medium --theme-color both --system spectrum-two"
configs[40]="large-both-express --theme-scale large --theme-color both --system express"
configs[41]="medium-both-express --theme-scale medium --theme-color both --system express"
configs[42]="both-dark-spectrum --theme-scale both --theme-color dark --system spectrum"
configs[43]="both-light-spectrum --theme-scale both --theme-color light --system spectrum"
configs[44]="both-dark-spectrum-two --theme-scale both --theme-color dark --system spectrum-two"
configs[45]="both-light-spectrum-two --theme-scale both --theme-color light --system spectrum-two"
configs[46]="both-dark-express --theme-scale both --theme-color dark --system express"
configs[47]="both-light-express --theme-scale both --theme-color light --system express"
configs[48]="default-app-explicit --theme-scale both --theme-color both --system spectrum"
configs[49]="both-both-spectrum-two --theme-scale both --theme-color both --system spectrum-two"
configs[50]="both-both-express --theme-scale both --theme-color both --system express"

# Define expected properties for each configuration
declare -A expected_scale expected_color expected_system

# Set expected values for each configuration
for i in {1..50}; do
  # Extract command parts
  cmd="${configs[$i]}"
  
  # Default values - 'both' is not a direct value
  # For scale, 'both' means include both medium and large (default to medium)
  # For color, 'both' means include both light and dark (default to light)
  expected_scale[$i]="medium"
  expected_color[$i]="light"
  expected_system[$i]="spectrum"
  
  # Parse command to extract actual values
  if [[ "$cmd" == *"--theme-scale large"* ]]; then
    expected_scale[$i]="large"
  elif [[ "$cmd" == *"--theme-scale medium"* ]]; then
    expected_scale[$i]="medium"
  fi
  
  if [[ "$cmd" == *"--theme-color dark"* ]]; then
    expected_color[$i]="dark"
  elif [[ "$cmd" == *"--theme-color light"* ]]; then
    expected_color[$i]="light"
  fi
  
  if [[ "$cmd" == *"--system spectrum-two"* ]]; then
    expected_system[$i]="spectrum-two"
  elif [[ "$cmd" == *"--system express"* ]]; then
    expected_system[$i]="express"
  fi
done

# Function to check SpTheme properties in App.tsx
check_app_tsx() {
  local project_dir=$1
  local expected_scale=$2
  local expected_color=$3
  local expected_system=$4
  local app_tsx_path="$project_dir/src/App.tsx"
  
  echo "  1. Checking App.tsx for correct SpTheme properties..."
  
  if [[ ! -f "$app_tsx_path" ]]; then
    echo "    ❌ App.tsx not found!"
    return 1
  fi
  
  # Check for scale property
  if grep -q "scale=\"$expected_scale\"" "$app_tsx_path"; then
    echo "    ✅ Correct scale property: $expected_scale"
  else
    echo "    ❌ Incorrect scale property. Expected: $expected_scale"
    grep -o "scale=\"[^\"]*\"" "$app_tsx_path" || echo "    Scale property not found"
  fi
  
  # Check for color property
  if grep -q "color=\"$expected_color\"" "$app_tsx_path"; then
    echo "    ✅ Correct color property: $expected_color"
  else
    echo "    ❌ Incorrect color property. Expected: $expected_color"
    grep -o "color=\"[^\"]*\"" "$app_tsx_path" || echo "    Color property not found"
  fi
  
  # Check for system property
  if grep -q "system=\"$expected_system\"" "$app_tsx_path"; then
    echo "    ✅ Correct system property: $expected_system"
  else
    echo "    ❌ Incorrect system property. Expected: $expected_system"
    grep -o "system=\"[^\"]*\"" "$app_tsx_path" || echo "    System property not found"
  fi
}

# Function to check SpTheme.ts import statements
check_sptheme_ts() {
  local project_dir=$1
  local expected_scale=$2
  local expected_color=$3
  local expected_system=$4
  local cmd="${configs[$i]}"
  local sptheme_ts_path="$project_dir/src/components/SpTheme.ts"
  
  echo "  2. Checking SpTheme.ts for correct import statements..."
  
  if [[ ! -f "$sptheme_ts_path" ]]; then
    echo "    ❌ SpTheme.ts not found!"
    return 1
  fi
  
  # Determine expected imports based on configuration
  local imports_correct=true
  local system_path=""
  
  # Determine system path prefix
  if [[ "$expected_system" == "spectrum" ]]; then
    system_path=""
  elif [[ "$expected_system" == "spectrum-two" ]]; then
    system_path="spectrum-two/"
  elif [[ "$expected_system" == "express" ]]; then
    system_path="express/"
  fi
  
  # Check for scale imports
  if [[ "$cmd" == *"--theme-scale both"* || "$cmd" != *"--theme-scale"* ]]; then
    # Should import both scales
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}scale-medium.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing medium scale import for $expected_system system"
      imports_correct=false
    fi
    
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}scale-large.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing large scale import for $expected_system system"
      imports_correct=false
    fi
  elif [[ "$expected_scale" == "medium" ]]; then
    # Should only import medium scale
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}scale-medium.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing medium scale import for $expected_system system"
      imports_correct=false
    fi
    
    if grep -q "import '@spectrum-web-components/theme/${system_path}scale-large.js';" "$sptheme_ts_path"; then
      echo "    ❌ Unexpected large scale import for $expected_system system"
      imports_correct=false
    fi
  elif [[ "$expected_scale" == "large" ]]; then
    # Should only import large scale
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}scale-large.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing large scale import for $expected_system system"
      imports_correct=false
    fi
    
    if grep -q "import '@spectrum-web-components/theme/${system_path}scale-medium.js';" "$sptheme_ts_path"; then
      echo "    ❌ Unexpected medium scale import for $expected_system system"
      imports_correct=false
    fi
  fi
  
  # Check for color imports
  if [[ "$cmd" == *"--theme-color both"* || "$cmd" != *"--theme-color"* ]]; then
    # Should import both colors
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}theme-light.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing light theme import for $expected_system system"
      imports_correct=false
    fi
    
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}theme-dark.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing dark theme import for $expected_system system"
      imports_correct=false
    fi
  elif [[ "$expected_color" == "light" ]]; then
    # Should only import light theme
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}theme-light.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing light theme import for $expected_system system"
      imports_correct=false
    fi
    
    if grep -q "import '@spectrum-web-components/theme/${system_path}theme-dark.js';" "$sptheme_ts_path"; then
      echo "    ❌ Unexpected dark theme import for $expected_system system"
      imports_correct=false
    fi
  elif [[ "$expected_color" == "dark" ]]; then
    # Should only import dark theme
    if ! grep -q "import '@spectrum-web-components/theme/${system_path}theme-dark.js';" "$sptheme_ts_path"; then
      echo "    ❌ Missing dark theme import for $expected_system system"
      imports_correct=false
    fi
    
    if grep -q "import '@spectrum-web-components/theme/${system_path}theme-light.js';" "$sptheme_ts_path"; then
      echo "    ❌ Unexpected light theme import for $expected_system system"
      imports_correct=false
    fi
  fi
  
  # Check for wrong system imports
  if [[ "$expected_system" == "spectrum" ]]; then
    if grep -q "import '@spectrum-web-components/theme/spectrum-two/" "$sptheme_ts_path" || 
       grep -q "import '@spectrum-web-components/theme/express/" "$sptheme_ts_path"; then
      echo "    ❌ Found imports from wrong system (expected spectrum)"
      imports_correct=false
    fi
  elif [[ "$expected_system" == "spectrum-two" ]]; then
    if grep -q "import '@spectrum-web-components/theme/scale-" "$sptheme_ts_path" || 
       grep -q "import '@spectrum-web-components/theme/theme-" "$sptheme_ts_path" ||
       grep -q "import '@spectrum-web-components/theme/express/" "$sptheme_ts_path"; then
      echo "    ❌ Found imports from wrong system (expected spectrum-two)"
      imports_correct=false
    fi
  elif [[ "$expected_system" == "express" ]]; then
    if grep -q "import '@spectrum-web-components/theme/scale-" "$sptheme_ts_path" || 
       grep -q "import '@spectrum-web-components/theme/theme-" "$sptheme_ts_path" ||
       grep -q "import '@spectrum-web-components/theme/spectrum-two/" "$sptheme_ts_path"; then
      echo "    ❌ Found imports from wrong system (expected express)"
      imports_correct=false
    fi
  fi
  
  if [[ "$imports_correct" == true ]]; then
    echo "    ✅ All import statements are correct for $expected_system system"
    return 0
  else
    echo "    ❌ Some import statements are incorrect"
    return 1
  fi
}

# Function to test server startup
test_server_startup() {
  local project_dir=$1
  local port=$2
  local timeout=$3
  local open_browser=$4
  
  echo "  3. Starting dev server on port $port (timeout: ${timeout}s)..."
  
  # Change to project directory
  cd "$project_dir"
  
  # Start the server in the background with custom port
  npm run dev -- --port $port > server_output.log 2>&1 &
  server_pid=$!
  
  # Wait for server to start
  local start_time=$(date +%s)
  local server_started=false
  
  while (( $(date +%s) - start_time < timeout )); do
    if grep -q "Local:" server_output.log; then
      server_started=true
      # Fix URL extraction - properly parse the Vite server output
      server_url=$(grep -o "http://[^ ]*" server_output.log | head -1)
      echo "    ✅ Server started successfully: $server_url"
      
      # Open browser if requested
      if [[ "$open_browser" == true ]]; then
        echo "    Opening browser..."
        if [[ -n "$server_url" ]]; then
          open "$server_url"
          # Wait for user to check the page
          echo "    Press Enter after checking the page in the browser..."
          read
        else
          echo "    ❌ Could not extract server URL from output"
        fi
      fi
      
      break
    fi
    sleep 1
  done
  
  # Kill the server process
  kill $server_pid 2>/dev/null
  wait $server_pid 2>/dev/null
  
  # Clean up
  rm -f server_output.log
  
  if [[ "$server_started" != true ]]; then
    echo "    ❌ Server failed to start within ${timeout}s"
    return 1
  fi
  
  return 0
}

# Main testing loop
echo "Starting to test generated projects..."
echo "Will test projects #$START_INDEX to #$END_INDEX in $PARENT_DIR"

# Change to parent directory
cd "$PARENT_DIR"

# Track results
declare -A results
total_passed=0
total_tested=0

# Test each project
for ((i=START_INDEX; i<=END_INDEX; i++)); do
  # Extract project name (first word of the config)
  project_name=$(echo ${configs[$i]} | awk '{print $1}')
  
  echo "\n[$i/$END_INDEX] Testing project: $project_name"

  # Check if project exists
  if [[ ! -d "$project_name" ]]; then
    echo "    ❌ Project directory not found!"
    results[$i]="SKIPPED (not found)"
    continue
  fi
  
  total_tested=$((total_tested + 1))
  project_passed=true
  
  # Check App.tsx for correct properties
  check_app_tsx "$project_name" "${expected_scale[$i]}" "${expected_color[$i]}" "${expected_system[$i]}"
  if [[ $? -ne 0 ]]; then
    project_passed=false
  fi
  
  # Check SpTheme.ts for correct import statements
  check_sptheme_ts "$project_name" "${expected_scale[$i]}" "${expected_color[$i]}" "${expected_system[$i]}"
  if [[ $? -ne 0 ]]; then
    project_passed=false
  fi
  
  # Test server startup
  current_port=$((PORT_START + i - START_INDEX))
  test_server_startup "$project_name" $current_port $SERVER_TIMEOUT $BROWSER_OPEN
  if [[ $? -ne 0 ]]; then
    project_passed=false
  fi
  
  # Record result
  if [[ "$project_passed" == true ]]; then
    results[$i]="PASSED"
    total_passed=$((total_passed + 1))
  else
    results[$i]="FAILED"
  fi
  
  # Return to parent directory
  cd ..
  
  echo "  Result: ${results[$i]}"
  echo "  Press Enter to continue to the next project..."
  read
done

# Print summary
echo "\n=== Test Summary ==="
echo "Total projects tested: $total_tested"
echo "Projects passed: $total_passed"
echo "Projects failed: $((total_tested - total_passed))"
echo ""

echo "Detailed Results:"
for ((i=START_INDEX; i<=END_INDEX; i++)); do
  if [[ -n "${results[$i]}" ]]; then
    project_name=$(echo ${configs[$i]} | awk '{print $1}')
    echo "[$i] $project_name: ${results[$i]}"
  fi
done

# Return to original directory
cd ..

echo "\nDone!" 