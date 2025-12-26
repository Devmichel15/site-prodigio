$images = @{
    "video_relationship.jpg" = "https://i.ytimg.com/vi/aL3pCqYqM3M/hqdefault.jpg"
    "video_minhador.jpg" = "https://i.ytimg.com/vi/S7lS4r7vF54/hqdefault.jpg" 
    "video_propaganda.jpg" = "https://i.ytimg.com/vi/Z7q3X8XqZ5I/hqdefault.jpg"
    "album_king2da.jpg" = "https://m.media-amazon.com/images/I/51w7g6wXyuL._UX500_FMwebp_QL85_.jpg"
    "album_castelos.jpg" = "https://m.media-amazon.com/images/I/51+6JgF33NL._UX500_FMwebp_QL85_.jpg"
    "album_allstar.jpg" = "https://m.media-amazon.com/images/I/61K+j6K9+lL._UX500_FMwebp_QL85_.jpg"
}
# Fallbacks if amazon links fail - re-using some generic artistic ones for albums to ensure no broken images
$fallbacks = @{
    "album_king2da.jpg" = "https://images.unsplash.com/photo-1514525253440-b393452e2729?q=80&w=1942"
    "album_castelos.jpg" = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070"
    "album_allstar.jpg" = "https://images.unsplash.com/photo-1493225255756-d6216ae3b624?q=80&w=2070"
}

$destDir = "public/assets/images"

foreach ($name in $images.Keys) {
    echo "Downloading $name..."
    try {
        Invoke-WebRequest -Uri $images[$name] -OutFile "$destDir/$name" -UserAgent "Mozilla/5.0"
        echo "Downloaded $name"
    } catch {
        echo "Failed to download $name from primary source. Trying fallback..."
        if ($fallbacks.ContainsKey($name)) {
             try {
                Invoke-WebRequest -Uri $fallbacks[$name] -OutFile "$destDir/$name" -UserAgent "Mozilla/5.0"
                echo "Downloaded fallback for $name"
            } catch {
                echo "Failed to download fallback for $name"
            }
        }
    }
}
