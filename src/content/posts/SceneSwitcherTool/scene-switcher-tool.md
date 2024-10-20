---
title: Scene Switcher Tool for Unity
published: 2024-06-04T04:40:26.381Z
tags: [Unity, Tool, UnityEditor]
category: Tool
draft: false
---

# Scene Switcher Tool for Unity

## Overview

The Scene Switcher Tool is a custom Unity Editor tool designed to simplify the process of switching between scenes during development. It allows users to quickly switch to any scene in the build settings, load scenes additively, and bookmark frequently used scenes for easy access.

## Features

- **Search Scenes**: Quickly find scenes using the search bar.
- **Toggle Scenes**: Select a scene using toggle buttons with icons.
- **Play Scene**: Play the selected scene.
- **Load Scene Additively**: Load the selected scene additively.
- **Load Scene Without Playing**: Load the selected scene without entering play mode.
- **Bookmark Scenes**: Bookmark frequently used scenes for easy access.

## How to Use

1. **Open the Scene Switcher Tool**:
   - Go to `Tools > Scene Switcher Tool` in the Unity Editor menu.

2. **Search for a Scene**:
   - Use the search bar at the top of the tool window to filter scenes by name.

3. **Select a Scene**:
   - Click the toggle button next to the scene name. The button has an icon for better visibility.
   - Only one scene can be selected at a time.

4. **Play the Scene**:
   - Click the "Play" button to open the selected scene and enter play mode.

5. **Load the Scene Additively**:
   - Click the "Additive" button to load the selected scene additively.

6. **Load the Scene Without Playing**:
   - Click the "Load" button to open the selected scene without entering play mode.

7. **Bookmark a Scene**:
   - Click the "Bookmark" button to add the selected scene to the bookmarked scenes list.
   - Bookmarked scenes are saved and will be available the next time you open the tool.

## UI Layout

- **Scenes in Build**:
  - A list of all scenes in the build settings, displayed with toggle buttons and icons.

- **Bookmarked Scenes**:
  - A list of bookmarked scenes for quick access.

- **Action Buttons**:
  - Play: `d_PlayButton` icon
  - Load Additively: `d_Toolbar Plus More` icon
  - Load: `d_Refresh` icon
  - Bookmark: `Favorite` icon

## Screenshots

#### Main Tool Window
<img src="Editor/Resources/Image/UIPick.png" alt="Main Tool Window" width="400">

#### Open Tool
<img src="Editor/Resources/Image/OpenTool.png" alt="Toggle Scene Selection" width="400">

#### Search Buttons
<img src="Editor/Resources/Image/Search.png" alt="Action Buttons" width="400">

## Installation

### Manual Way For Better Customization
1. Download the `SceneSwitcherTool.cs` script from the repository.
2. Place the script in the `Editor` folder of your Unity project.
3. Open Unity and the tool should be accessible from the menu: `Tools > Scene Switcher Tool`.

### UPM Git Clone
1. Open Unity and go to `Window > Package Manager`.
2. Click the `+` icon in the top left corner and choose `Add package from git URL...`.
3. Enter the Git URL of the repository `https://github.com/billtruong003/SceneSwitcherToolUnity`

4. Unity will download and install the tool directly from the Git repository.

### Download .UnityPackageVersion

1. Download the `.unitypackage` version of **Scene Switcher Tool** from the releases page of the repository or the provided link.
2. In Unity, go to `Assets > Import Package > Custom Package`.
3. Select the downloaded `.unitypackage` file and import it into your project.
4. The tool will be available under the `Tools > Scene Switcher Tool` menu.

#### [📦 Download Scene Switcher Tool .UnityPackage](https://example.com/SceneSwitcherTool.unitypackage)


