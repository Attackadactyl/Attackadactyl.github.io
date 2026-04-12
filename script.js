const buildUrl = "Build";
const config = {
  dataUrl:            `${buildUrl}/WebGL.data`,
  frameworkUrl:       `${buildUrl}/WebGL.framework.js`,
  codeUrl:            `${buildUrl}/WebGL.wasm`,
  streamingAssetsUrl: "StreamingAssets",
  companyName:        "YourCompany",
  productName:        "Circulorb",
  productVersion:     "1.0",
};

createUnityInstance(document.querySelector("#unity-canvas"), config);
