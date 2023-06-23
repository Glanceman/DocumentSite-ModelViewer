# Get to use

## Retrieve Model List

### Example

```csharp{8}
    async void Start()
    {
        if(_searchMenu == null)
        {
            Debug.LogError("_searchMenu is not set");
        }
        _searchMenu.Init(this.gameObject);
        var modelList = await API.GetDefaultModelList();
        FillModelList(modelList);
    }
```
### Function 

```csharp
public static async Task<List<SketchfabModel>> GetDefaultModelList(Action OnLoading=null);
public static async Task<List<SketchfabModel>> GetDefaultModelList(UnityWebRequestSketchfabModelList.Parameters param, Action OnLoading = null);
```

#### Input

:::details
|Class                                        | Input            | Description              |
|---------                                    | ---------------- | -----------              |
|UnityWebRequestSketchfabModelList.Parameters | param      | **optional**, if no specific, the global search parameter will be used |
|Action                                       | onLoad           | **optional**, callback when loading model |
:::

#### Output

:::details
|Class                    | Output           | Description              |
|---------                | ---------------- | -----------              |
|List`<`sketchfabModel`>` | SketchfabModels  | Each model contains **Uid**, **Name**, **IsDownloadable**, **Description** , **FaceCount**, **VertexCount**, and **Thumbnail** |
:::


## Search Model

### Example

```csharp{12}
    public async void Search()
    {
        if (searchField == null)
        {
            Debug.LogError("inputField is not set (NULL)");
            return;
        }
        UnityWebRequestSketchfabModelList.Parameters param = _searchMenu.GetParameters();
        param.downloadable=true;
        param.count = API.Instance.LengthOfModelList;
        string query = searchField.text;
        var models =await API.SearchModel(query,param);
        FillModelList(models);
    }
```
### Function 

```csharp
public static async Task<List<SketchfabModel>> SearchModel(string query,Action OnSearching=null);
public static async Task<List<SketchfabModel>> SearchModel(string query, UnityWebRequestSketchfabModelList.Parameters param, Action OnSearching = null);
```

#### Input

:::details
|Class                                        | Input            | Description              |
|---------                                    | ---------------- | -----------              |
|string                                       | query           | keyword used to search model, if empty, list of random models will be given |
|UnityWebRequestSketchfabModelList.Parameters | param            | **optional**, if no specific, the global search parameter will be used |
|Action                                       | onSearching      | **optional**, callback when searching model |
:::

### Output

:::details
|Class                                        | Output            | Description              |
|---------                                    | ---------------- | -----------              |
|List`<`sketchfabModel`>`                     | SketchfabModels  | Each model contains **Uid**, **Name**, **IsDownloadable**, **Description** , **FaceCount**, **VertexCount**, and **Thumbnail** |
:::



## Download Model

### Example

```csharp{4}
    public override async void Interact()
    {
        background.sprite = _loadSprite;
        var gameObject = await API.ImportModelByID(_model.Uid);
        if (gameObject != null)
        {
            Debug.Log("get the object success");
            //preprocessing
            Tools.PreprocessGameObject(gameObject);
            background.sprite = _sucessSprite;
        }
        else
        {
            Debug.LogWarning("unable to get the object");
            background.sprite = _errorSprite;
        }
        //
        this.gameObject.SetActive(true);
        this.StartCoroutine(Tools.DelayExecute(1f, () =>
        {
            Debug.Log("Delay");
            background.sprite = _defaultSprite;
        }));
    }
```
### Function

``` csharp
    public async static Task<GameObject> ImportModelByID(string guid, Action OnImporting =null);
```
#### Input

:::details
|Class                                        | Input            | Description              |
|---------                                    | ---------------- | -----------              |
|string                                       | guid             | id of the model          |
|Action                                       | onImport         | **optional**, callback when importing model |
:::

#### Output

:::details
|Class                                        | Output            | Description              |
|---------                                    | ----------------  | -----------              |
|GameObject                                   | gameObject        |                          |
:::


