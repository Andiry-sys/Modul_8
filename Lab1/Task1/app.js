function Click() {
  let jsonData = document.getElementById('textFormat');

  document.getElementById('jsonFormat').value = JSON.stringify(
    jsonData.value,
    null,
    4
  );
}
