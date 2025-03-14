document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const fileId = urlParams.get("fileId");
  if (fileId) {
    fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
      headers: { Authorization: `Bearer ${gapi.auth.getToken().access_token}` }
    })
      .then(response => response.arrayBuffer())
      .then(buffer => {
        document.querySelector("#alphaTab").alphaTab().load(buffer);
      });
  }
});
