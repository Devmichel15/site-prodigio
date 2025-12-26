$images = @{
    "about_art.jpg" = "https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/fb-9/logoProdigio--1800x900.jpg"
    "video_relationship.jpg" = "https://i.ytimg.com/vi/aL3pCqYqM3M/maxresdefault.jpg"
    "video_minhador.jpg" = "https://i.ytimg.com/vi/S7lS4r7vF54/maxresdefault.jpg" 
    "video_propaganda.jpg" = "https://i.ytimg.com/vi/Z7q3X8XqZ5I/maxresdefault.jpg"
    "album_king2da.jpg" = "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/9c/6a/5d/9c6a5d1a-4b9b-8e1c-5c8a-7a6b9d6e3f4a/cover.jpg/600x600bb.jpg" 
    "album_castelos.jpg" = "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/2a/3e/0d2a3e6a-7b3c-4d2f-8e1a-9b8c7d6e5a4f/cover.jpg/600x600bb.jpg"
    "album_allstar.jpg" = "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8b/4c/1a/8b4c1a9d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/cover.jpg/600x600bb.jpg"
}

$destDir = "public/assets/images"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

foreach ($name in $images.Keys) {
    echo "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $images[$name] -OutFile "$destDir/$name" -UserAgent "Mozilla/5.0"
        echo "Downloaded $name"
    } catch {
        echo "Failed to download $name : $_"
        # Fallback to a generic image if specific one fails, or keep 
        # existing logic but better to fail gracefully.
    }
}
