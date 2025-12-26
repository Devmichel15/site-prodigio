$images = @{
    "hero_bg.jpg" = "https://1.bp.blogspot.com/-d9Vi5Khm4GY/VZKMBfGC9qI/AAAAAAAAAv8/3WAEV189hlA/s1600/Prod_gios_Contra_Boa_Vibe.jpg"
    "gallery_post7.jpg" = "https://www.giranoticias.com/_midias/jpg/2022/03/17/800x600/1_dsc01909-302784.jpg"
    "gallery_palavras.jpg" = "https://tribunadeangola.org/wp-content/uploads/2022/10/prodig.jpg"
    "gallery_close.jpg" = "https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/fb-9/logoProdigio--1800x900.jpg"
    "gallery_historical.jpg" = "https://le-cdn.website-editor.net/f673be16c18f4267b5bdd2bbaa093349/dms3rep/multi/opt/PRODIGIO-960w.jpg"
    "gallery_nga.jpg" = "https://images.trustinnews.pt/uploads/sites/5/2022/10/39630664-1600x1067.jpg"
    "album_prodigios.jpg" = "https://1.bp.blogspot.com/-d9Vi5Khm4GY/VZKMBfGC9qI/AAAAAAAAAv8/3WAEV189hlA/s1600/Prod_gios_Contra_Boa_Vibe.jpg"
    "promo_vmas.png" = "https://comunidadeculturaearte.com/wp-content/uploads/2023/01/Prodigio.png"
    "timeline_cine.jpg" = "https://musicanoponto.com/uploads/images/202306/image_870x_649e225f1ab6b.jpg"
    "timeline_promo.jpg" = "https://www.giranoticias.com/_midias/jpg/2022/03/17/800x600/1_dsc01909-302784.jpg"
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
    }
}
