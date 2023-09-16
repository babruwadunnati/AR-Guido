# AR-Guido
Created an Augmented Reality based 3D Build and Assembly Instruction App for Cardboard Models.The application is developed using Unity engine. Blender is used to design the 3D models of the product. Vuforia sdk is used to deploy these models in AR.


## Solution

* The prototype application provides a GUI based 3D assembly instructions set manual in augmented reality.
* The application is developed using Unity engine. Blender is used to design the 3D models of the product.
Vuforia sdk is used to deploy these models in AR.
* Vuforia has a database of the target images(QR codes) used for product identification. Later the
corresponding QR specific model is downloaded from Firebase cloud storage.
* The application reads the downloaded model and provides 3D assembly instructions in AR.

### Additional Feature:
* After the completion of the assembly instruction set , the working of the product is implemented using AR
i.e. the user can learn about the functionalities(usage) of the product by interacting with the AR model.

### Technology Stack:
* Unity(Application building),Blender(Creating 3D models),Vuforia (Augmented Reality sdk),
Google Firebase(Cloud Storage),Language: C#
