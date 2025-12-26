$images = @{
    "video_relationship.jpg" = "https://img.youtube.com/vi/aL3pCqYqM3M/hqdefault.jpg"
    "video_minhador.jpg" = "https://img.youtube.com/vi/S7lS4r7vF54/hqdefault.jpg" 
    "video_propaganda.jpg" = "https://img.youtube.com/vi/Z7q3X8XqZ5I/hqdefault.jpg"
    "album_king2da.jpg" = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070" 
    "album_allstar.jpg" = "https://images.unsplash.com/photo-1493225255756-d6216ae3b624?q=80&w=2070"
}

$destDir = "public/assets/images"

foreach ($name in $images.Keys) {
    echo "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $images[$name] -OutFile "$destDir/$name" -UserAgent "Mozilla/5.0"
        echo "Downloaded $name"
    } catch {
        echo "Failed to download $name"
    }
}
