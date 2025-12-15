# Image Setup Instructions

## CodeStory{Uyo} Image - IMPORTANT!

The `codestory-uyo.jpg` file currently exists but is **EMPTY (0 bytes)**.

### To Fix This:

1. **Download the image from Google Drive:**
   - Go to: https://drive.google.com/drive/folders/163GClV-2e_yF9GYPL09ewRi-TXJGaP9D
   - Download one of the images (preferably a good one showing the event)
   - Save it to your Downloads folder

2. **Copy the downloaded image:**
   - Find the downloaded image file
   - Copy it (Ctrl+C)
   - Navigate to: `c:\Users\JOE\test-project\public\`
   - Delete the empty `codestory-uyo.jpg` file
   - Paste your downloaded image
   - Rename it to: `codestory-uyo.jpg` (all lowercase, with hyphens)

3. **Verify the file size:**
   - The file should be at least 100KB or more (not 0 bytes)
   - You can check by right-clicking → Properties

### Quick PowerShell Command (if you know the filename):

If you downloaded the image and know its name, you can run this in PowerShell:
```powershell
Copy-Item "$env:USERPROFILE\Downloads\YOUR_IMAGE_NAME.jpg" -Destination "c:\Users\JOE\test-project\public\codestory-uyo.jpg" -Force
```

Replace `YOUR_IMAGE_NAME.jpg` with the actual filename you downloaded.

