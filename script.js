const buildUrl = "Build";
const config = {
  dataUrl:            `${buildUrl}/Web.data`,
  frameworkUrl:       `${buildUrl}/Web.framework.js`,
  codeUrl:            `${buildUrl}/Web.wasm`,
  streamingAssetsUrl: "StreamingAssets",
  companyName:        "YourCompany",
  productName:        "Circulorb",
  productVersion:     "1.0",
};

createUnityInstance(document.querySelector("#unity-canvas"), config);
