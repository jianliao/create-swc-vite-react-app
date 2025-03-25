#!/bin/zsh

# Advanced script to test CLI commands from CLI-OPTIONS.md
# This script allows testing specific configurations or running them in batches

# Default values
START_INDEX=1
END_INDEX=50
BATCH_SIZE=0  # 0 means run all at once
PARENT_DIR="cli-test-projects"
SKIP_EXISTING=true

# Help function
show_help() {
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  -s, --start INDEX       Start from configuration #INDEX (default: 1)"
  echo "  -e, --end INDEX         End at configuration #INDEX (default: 50)"
  echo "  -b, --batch SIZE        Run in batches of SIZE projects (default: 0, run all at once)"
  echo "  -d, --directory DIR     Parent directory to store projects (default: cli-test-projects)"
  echo "  -f, --force             Overwrite existing projects (default: skip existing)"
  echo "  -h, --help              Show this help message"
  echo ""
  echo "Examples:"
  echo "  $0                      Run all 50 configurations"
  echo "  $0 -s 10 -e 20          Run configurations #10 through #20"
  echo "  $0 -b 5                 Run all configurations in batches of 5"
  echo "  $0 -d my-test-dir       Store projects in my-test-dir"
  echo "  $0 -f                   Overwrite existing projects"
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
    -b|--batch)
      BATCH_SIZE=$2
      shift 2
      ;;
    -d|--directory)
      PARENT_DIR=$2
      shift 2
      ;;
    -f|--force)
      SKIP_EXISTING=false
      shift
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
if [[ $START_INDEX -lt 1 || $START_INDEX -gt 50 ]]; then
  echo "Error: Start index must be between 1 and 50"
  exit 1
fi

if [[ $END_INDEX -lt 1 || $END_INDEX -gt 50 ]]; then
  echo "Error: End index must be between 1 and 50"
  exit 1
fi

if [[ $START_INDEX -gt $END_INDEX ]]; then
  echo "Error: Start index must be less than or equal to end index"
  exit 1
fi

if [[ $BATCH_SIZE -lt 0 ]]; then
  echo "Error: Batch size must be non-negative"
  exit 1
fi

# Create parent directory
mkdir -p "$PARENT_DIR"
cd "$PARENT_DIR"

# Define all configurations
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

# Define descriptions
declare -A descriptions
descriptions[1]="Using all defaults (both scales, both themes, Spectrum system)"
descriptions[2]="Using all defaults with explicit options"
descriptions[3]="Default scale and color, explicit Spectrum system"
descriptions[4]="Default scale and system, explicit both themes"
descriptions[5]="Default color and system, explicit both scales"
descriptions[6]="Large scale, default color and system"
descriptions[7]="Medium scale, default color and system"
descriptions[8]="Default scale, dark theme, default system"
descriptions[9]="Default scale, light theme, default system"
descriptions[10]="Default scale and color, Spectrum Two system"
descriptions[11]="Default scale and color, Express system"
descriptions[12]="Large scale, dark theme, default system"
descriptions[13]="Large scale, light theme, default system"
descriptions[14]="Medium scale, dark theme, default system"
descriptions[15]="Medium scale, light theme, default system"
descriptions[16]="Default scale, dark theme, Spectrum Two system"
descriptions[17]="Default scale, light theme, Spectrum Two system"
descriptions[18]="Default scale, dark theme, Express system"
descriptions[19]="Default scale, light theme, Express system"
descriptions[20]="Large scale, default color, Spectrum Two system"
descriptions[21]="Medium scale, default color, Spectrum Two system"
descriptions[22]="Large scale, default color, Express system"
descriptions[23]="Medium scale, default color, Express system"
descriptions[24]="Large scale, dark theme using Spectrum design system"
descriptions[25]="Large scale, light theme using Spectrum design system"
descriptions[26]="Medium scale, dark theme using Spectrum design system"
descriptions[27]="Medium scale, light theme using Spectrum design system"
descriptions[28]="Large scale, dark theme using Spectrum Two design system"
descriptions[29]="Large scale, light theme using Spectrum Two design system"
descriptions[30]="Medium scale, dark theme using Spectrum Two design system"
descriptions[31]="Medium scale, light theme using Spectrum Two design system"
descriptions[32]="Large scale, dark theme using Express design system"
descriptions[33]="Large scale, light theme using Express design system"
descriptions[34]="Medium scale, dark theme using Express design system"
descriptions[35]="Medium scale, light theme using Express design system"
descriptions[36]="Large scale with both light and dark themes using Spectrum design system"
descriptions[37]="Medium scale with both light and dark themes using Spectrum design system"
descriptions[38]="Large scale with both light and dark themes using Spectrum Two design system"
descriptions[39]="Medium scale with both light and dark themes using Spectrum Two design system"
descriptions[40]="Large scale with both light and dark themes using Express design system"
descriptions[41]="Medium scale with both light and dark themes using Express design system"
descriptions[42]="Both large and medium scales with dark theme using Spectrum design system"
descriptions[43]="Both large and medium scales with light theme using Spectrum design system"
descriptions[44]="Both large and medium scales with dark theme using Spectrum Two design system"
descriptions[45]="Both large and medium scales with light theme using Spectrum Two design system"
descriptions[46]="Both large and medium scales with dark theme using Express design system"
descriptions[47]="Both large and medium scales with light theme using Express design system"
descriptions[48]="Both scales with both themes using Spectrum design system"
descriptions[49]="Both scales with both themes using Spectrum Two design system"
descriptions[50]="Both scales with both themes using Express design system"

# Calculate total configurations to run
TOTAL_CONFIGS=$((END_INDEX - START_INDEX + 1))
echo "Starting to test CLI commands..."
echo "Will create $TOTAL_CONFIGS projects (configurations #$START_INDEX to #$END_INDEX)"
echo "Projects will be stored in the $PARENT_DIR directory"

# Run configurations
if [[ $BATCH_SIZE -eq 0 ]]; then
  # Run all at once
  for ((i=START_INDEX; i<=END_INDEX; i++)); do
    # Extract project name (first word of the config)
    project_name=$(echo ${configs[$i]} | awk '{print $1}')
    
    # Check if project already exists
    if [[ -d "$project_name" && $SKIP_EXISTING == true ]]; then
      echo "\n[$i/$END_INDEX] Skipping existing project: $project_name"
      continue
    fi
    
    echo "\n[$i/$END_INDEX] Creating project: ${descriptions[$i]}"
    echo "Command: npx create-swc-vite-react-app ${configs[$i]}"
    eval "npx create-swc-vite-react-app ${configs[$i]}"
  done
else
  # Run in batches
  batch_num=1
  for ((i=START_INDEX; i<=END_INDEX; i+=BATCH_SIZE)); do
    end_batch=$((i + BATCH_SIZE - 1))
    if [[ $end_batch -gt $END_INDEX ]]; then
      end_batch=$END_INDEX
    fi
    
    echo "\nBatch $batch_num: Running configurations #$i to #$end_batch"
    
    for ((j=i; j<=end_batch; j++)); do
      # Extract project name (first word of the config)
      project_name=$(echo ${configs[$j]} | awk '{print $1}')
      
      # Check if project already exists
      if [[ -d "$project_name" && $SKIP_EXISTING == true ]]; then
        echo "\n[$j/$END_INDEX] Skipping existing project: $project_name"
        continue
      fi
      
      echo "\n[$j/$END_INDEX] Creating project: ${descriptions[$j]}"
      echo "Command: npx create-swc-vite-react-app ${configs[$j]}"
      eval "npx create-swc-vite-react-app ${configs[$j]}"
    done
    
    echo "\nBatch $batch_num completed. Press Enter to continue with the next batch..."
    read
    
    batch_num=$((batch_num + 1))
  done
fi

echo "\nAll specified projects have been created successfully!"
echo "Projects are located in the $PARENT_DIR directory."

# Return to the original directory
cd ..

echo "Done!" 