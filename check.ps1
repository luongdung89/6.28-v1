$ie = New-Object -COMObject InternetExplorer.Application
$ie.Visible = $false
$ie.Navigate("http://localhost:8080")
Start-Sleep -Seconds 3
Write-Output "Body innerHTML length:"
Write-Output $ie.Document.body.innerHTML.Length
Write-Output "First 500 chars of body:"
Write-Output $ie.Document.body.innerHTML.Substring(0, [math]::Min(500, $ie.Document.body.innerHTML.Length))
$ie.Quit()
