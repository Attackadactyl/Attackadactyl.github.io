const buildUrl = "Build";
const config = {
  dataUrl:            `${buildUrl}/Web.data.gz`,
  frameworkUrl:       `${buildUrl}/Web.framework.js.gz`,
  codeUrl:            `${buildUrl}/Web.wasm.gz`,
  streamingAssetsUrl: "StreamingAssets",
  companyName:        "YourCompany",
  productName:        "Circulorb",
  productVersion:     "1.0",
};

createUnityInstance(document.querySelector("#unity-canvas"), config);
