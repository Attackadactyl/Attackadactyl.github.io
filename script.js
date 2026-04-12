const buildUrl = "Build";
const config = {
  dataUrl:            `${buildUrl}/Web.data.br`,
  frameworkUrl:       `${buildUrl}/Web.framework.js.br`,
  codeUrl:            `${buildUrl}/Web.wasm.br`,
  streamingAssetsUrl: "StreamingAssets",
  companyName:        "YourCompany",
  productName:        "Circulorb",
  productVersion:     "1.0",
};

createUnityInstance(document.querySelector("#unity-canvas"), config);
