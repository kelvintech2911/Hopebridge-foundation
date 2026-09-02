import os
from PIL import Image

def optimize_image(filepath, max_width=1920, quality=85):
    try:
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            return
            
        file_size = os.path.getsize(filepath)
        print(f"Original size of {filepath}: {file_size / (1024*1024):.2f} MB")
        
        with Image.open(filepath) as img:
            # Check if it's already small enough
            if img.width > max_width:
                # Calculate new height to maintain aspect ratio
                ratio = max_width / float(img.width)
                new_height = int((float(img.height) * float(ratio)))
                
                # Resize image
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
            # Save it back, compressed
            img.save(filepath, optimize=True, quality=quality)
            
        new_size = os.path.getsize(filepath)
        print(f"New size of {filepath}: {new_size / (1024*1024):.2f} MB")
        print(f"Reduction: {100 - (new_size/file_size)*100:.1f}%")
        
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

if __name__ == "__main__":
    optimize_image("images/Community Wellbeing.jpg")
