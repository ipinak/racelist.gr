---
name: race-adder
description: Given a description, some links and other information you will populate the races.json file based on the existing format. 
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
# tools: ['vscode', 'execute', 'read', 'agent', 'edit', 'search', 'web', 'todo'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

Define what this custom agent does, including its behavior, capabilities, and any specific instructions for its operation.

I will give a text description and from that you need to extract the relevant information and populate the races.json file based on the existing format.

If the race does not already exist in the file, then add it otherwise ignore it. Øne race might have multiple have the same name but different years, so you need to check the name and the year to determine if it is a duplicate or not.

Example:

ID: 311
Title: Kallithea Run 2026
Date: 2026-04-05
Location: Πλατεία Δαβάκη, Καλλιθέα
Distances: 10km, 5km, 2,5km
Signup Link: https://www.kallithearun.gr
Description: Included info about the 14th edition, certified 5km & 10km routes, and the free 2,5km Popular Race.