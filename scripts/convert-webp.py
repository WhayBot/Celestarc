import os
from PIL import Image

def convert_pngs_to_webp(target_dir):
    if not os.path.isdir(target_dir):
        return
    for fname in os.listdir(target_dir):
        if fname.lower().endswith(".png"):
            src_path = os.path.join(target_dir, fname)
            base = os.path.splitext(fname)[0]
            dst_path = os.path.join(target_dir, base + ".webp")
            try:
                with Image.open(src_path) as img:
                    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                        img.save(dst_path, "WEBP", quality=90, method=6)
                    else:
                        img = img.convert("RGB")
                        img.save(dst_path, "WEBP", quality=85, method=6)
                orig_sz = os.path.getsize(src_path)
                new_sz = os.path.getsize(dst_path)
                print(f"[WebP] {fname}: {orig_sz/1024:.1f}KB -> {new_sz/1024:.1f}KB ({new_sz/orig_sz*100:.1f}%)")
            except Exception as e:
                print(f"[Error] Failed to convert {fname}: {e}")

if __name__ == "__main__":
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "image"))
    convert_pngs_to_webp(base_dir)
