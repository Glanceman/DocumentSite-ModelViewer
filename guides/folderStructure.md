# Folder Structure

## The first layer
![LayerOne](/images/FolderStructure-Level1.png)

:::info
|Folder Name | Descriptions |
|---         |---           |
|Dependency  |Contains library for supporting the wrapper                   |
|Script      |Contains C#                                                   |
|UI          |Contains different UI elements such **button** or **menus**   |
|_SCRIPT     |A singleton to use the api                                    |
:::

## The UI layer
![LayerUI](/images/FolderStructure-UI.png)

:::info
|Folder Name | Descriptions |
|---         |---           |
|AdvancedSearchOptionMenu  |Contains menu for advanced searching                    |
|FloatAnimationMenu        |Contains menu for attaching to 3D models                |
|Icon                      |Contains icons                                          |
|IntegratedMenu            |Contains menu for viewing sketchfab and local history   |
|Material                  |Materials that will be used by the menu                 |
|Script                    |Shared C# script among the menu                         |
|SimpleFileExplorer        |File explorer for importing model                       |
|UI Components             |Shared UI components                                    |
|_UIManager                |A singleton to manage the ui (Optional)                 |
:::