import os
import shutil

def eliminar_node(origen):
    eliminar = ['.gitignore', 'package-lock.json','.githignore']
    for root, dirs, files in os.walk(origen, topdown=False):
        for name in files:
            if name in eliminar:
                os.remove(os.path.join(root, name))
        for name in dirs:
            if name == 'node_modules':
                shutil.rmtree(os.path.join(root, name))


if __name__ == '__main__':  
    eliminar_node('.')