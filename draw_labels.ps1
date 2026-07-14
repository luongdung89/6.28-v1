[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

# Helper function to decode UTF8 string from Base64
function Get-DecodedString($base64) {
    $bytes = [Convert]::FromBase64String($base64)
    return [Text.Encoding]::UTF8.GetString($bytes)
}

$cards = @(
    @{ Path = "assets/6.28-V4-01-neu-dieu-chua-hieu.png"; Base64Text = "TsOqdSDEkWnhu4F1IGNoxrBhIGhp4buDdQ==" },
    @{ Path = "assets/6.28-V4-02-nho-ai-giai-thich.png"; Base64Text = "Tmjhu50gQUkgZ2nhuqNpIHRow61jaA==" },
    @{ Path = "assets/6.28-V4-03-tu-lam.png"; Base64Text = "VOG7sSBsw6Bt" },
    @{ Path = "assets/6.28-V4-04-nho-ai-gop-y.png"; Base64Text = "Tmjhu50gQUkgZ8OzcCDDvQ==" },
    @{ Path = "assets/6.28-V4-05-bo-qua-tu-lam.png"; Base64Text = "QuG7jyBxdWEgYsaw4bubYyB04buxIGzDoG0=" },
    @{ Path = "assets/6.28-V4-06-chep-nguyen-bai-ai.png"; Base64Text = "Q2jDqXAgbmd1ecOqbiBiw6BpIEFJ" }
)

foreach ($card in $cards) {
    $filePath = Resolve-Path $card.Path
    $decodedText = Get-DecodedString $card.Base64Text
    Write-Host "Processing $($card.Path) with text '$decodedText'..."
    
    # Load original image
    $bmp = [System.Drawing.Bitmap]::FromFile($filePath)
    $W = $bmp.Width
    $H = $bmp.Height
    
    # Create new bitmap with same dimensions to avoid file locking issues
    $newBmp = [System.Drawing.Bitmap]::new($W, $H)
    $g = [System.Drawing.Graphics]::FromImage($newBmp)
    $g.Clear([System.Drawing.Color]::White)
    
    # Set high quality rendering options
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
    
    # Draw original image
    $g.DrawImage($bmp, 0, 0, $W, $H)
    
    # Define rectangular container dimensions at the bottom
    # Width is 78% of image width, height is 11% of image height
    $rectW = [float]($W * 0.78)
    $rectH = [float]($H * 0.11)
    $rectX = [float](($W - $rectW) / 2)
    $rectY = [float]($H - $rectH - ($H * 0.05)) # 5% margin from bottom
    
    $rect = [System.Drawing.RectangleF]::new($rectX, $rectY, $rectW, $rectH)
    
    # Draw solid white background
    $g.FillRectangle([System.Drawing.Brushes]::White, $rect)
    
    # Draw thick black border
    $penThickness = [float]($W * 0.008) # ~8px for 1024x1024
    if ($penThickness -lt 2) { $penThickness = 2 }
    $pen = [System.Drawing.Pen]::new([System.Drawing.Color]::Black, $penThickness)
    $g.DrawRectangle($pen, $rectX, $rectY, $rectW, $rectH)
    
    # Define text font and alignment
    $fontSize = [float]($W * 0.035) # ~36pt for 1024x1024
    $font = [System.Drawing.Font]::new("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
    
    $sf = [System.Drawing.StringFormat]::new()
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    
    # Draw centered text
    $g.DrawString($decodedText, $font, [System.Drawing.Brushes]::Black, $rect, $sf)
    
    # Clean up resources
    $bmp.Dispose()
    $font.Dispose()
    $pen.Dispose()
    $sf.Dispose()
    $g.Dispose()
    
    # Save back to file
    $tempPath = $filePath.ToString() + ".tmp.png"
    $newBmp.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $newBmp.Dispose()
    
    # Overwrite the original file
    Move-Item -Path $tempPath -Destination $filePath -Force
    Write-Host "Success: Label '$decodedText' drawn on $($card.Path)"
}
