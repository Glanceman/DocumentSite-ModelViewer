# Error With Gltfast when building

## Problem Description

### No response to retrieve 3D model (gltf/glb)
![Error](/images/error.png)

You will get the following error in the console 

:::danger Console.log
NullReferenceException: Object reference not set to an instance of an object
:::

By tracing the error log, you may locate the error occurs in **GetDefaultMaterial** in the **GLTFast libary**
![ErrorLog](/images/errorTracing.png)

The error occurs due to the required material can't not be found in the program.

## Solution
 
### 1. Preload the required shader variants

This method is going to tracking all the required shader variants and storing them.

>#### Steps:
>1. Run your scene that loads all glTFs you expect in the editor.
>2. Go to **Edit -> Project Settings -> Graphics**
>3. At the bottom end you'll see the **"Shader Preloading" section**
>4. Save the **currently tracked shaders/variants** to an asset
>![PreloadShader](/images/PreloadVariant.png)
>5. Take this **ShaderVariantCollection asset** and add it to the **"Preloaded Shaders" list**

### 2. Include all the shader variants

>#### Steps:
>1. Find the shader / material that will be used 
>![RequiredShader](/images/RequiredShader.png)
>2. Copy them to **Asset/Resources/** (if not exist, you can create one)
>3. In **Edit -> Project Settings -> Graphics** include all the above the shaders
>![IncludeShader](/images/IncludeShader.png)


