## Lab 1: Component Creation & Props

### Definition
Lab 1 focuses on building foundational UI components using React, TypeScript, and Tailwind CSS. It aims to help developers understand how to create reusable, type-safe components with clean prop handling and effective composition. The components built will be used internally across various company applications.

## Overview
A simple React + TypeScript component library using Vite and Tailwind CSS. Includes three reusable UI components: `AlertBox`, `UserProfileCard`, and `ProductDisplay`.

## Project Setup
```bash
npm create vite@latest component-library -- --template react-ts
cd component-library
npm install
```

## Folder Structure
```
src/
  components/
    AlertBox/
    UserProfileCard/
    ProductDisplay/
  types/
    index.ts
```

## Features
- Reusable UI components
- Typed props with optional fields
- Flexible layout with Tailwind CSS
- Composition using children

## Technologies
- React
- TypeScript
- Tailwind CSS
- Vite

## Clone and Run
```bash
git clone https://github.com/HaidaMarese/component-library.git
cd component-library
npm install
npm run dev
```
