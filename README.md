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

### Overview Diagram:
<img width="795" alt="image" src="https://github.com/babruwadunnati/AR-Guido/assets/40277323/7637adc1-9559-4a38-91fd-ea32e16939b8">


### Usecase Diagram:
<img width="581" alt="image" src="https://github.com/babruwadunnati/AR-Guido/assets/40277323/eb538149-2471-41ff-9ddc-504c258ff5e0">


### Implementation (Prototype Version 1.0):
<img width="763" alt="image" src="https://github.com/babruwadunnati/AR-Guido/assets/40277323/f5438780-20bf-4ff5-a2c2-901f6a99b55d">



