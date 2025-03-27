#!/usr/bin/env node

import { spawn } from 'child_process';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

async function main() {
  try {
    console.log('Testing MCP client/server communication...');
    
    // Create a client
    const transport = new StdioClientTransport({
      command: 'node',
      args: ['./dist/index.js', '--mcp']
    });

    const client = new Client(
      {
        name: 'test-client',
        version: '1.0.0'
      },
      {
        capabilities: {
          prompts: {},
          resources: {},
          tools: {}
        }
      }
    );

    await client.connect(transport);
    console.log('Connected to MCP server');

    // Test listing resources
    console.log('Listing resources...');
    const resources = await client.listResources();
    console.log('Resources:', resources);

    // Test listing prompts
    console.log('Listing prompts...');
    const prompts = await client.listPrompts();
    console.log('Prompts:', prompts);

    // Test getting a prompt
    console.log('Getting create-app prompt...');
    const prompt = await client.getPrompt({
      name: 'create-app',
      args: {}
    })
    console.log('Prompt:', prompt);

    // Test calling a tool (uncomment to actually create a project)
    
    console.log('Calling create-app tool...');
    const result = await client.callTool({
      name: 'create-app',
      arguments: {
        projectPath: 'test-mcp-project',
        useEslint: true,
        packageManager: 'npm',
        themeScale: 'both',
        themeColor: 'both',
        system: 'spectrum'
      }
    });
    console.log('Tool result:', result);

    console.log('All tests completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

main(); 