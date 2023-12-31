//#region Variables in context

/**
* The object this script component is attached to
* 
*/
declare var object: Entiti.Object;
//#endregion

//Global functions
/**
 * Finds an object in the scene by its name. The first object found will be returned. Returns null if no object is found.
 * 
 * @param {String} name The name of the object to find.
 * @returns {Object} The first found object with the specified name or null if no object was found.
 */
declare function findObjectByName(name: String): Entiti.Object;
/**
 * Returns the intersection point between a ray casted from the center of the screen to the plane generated by the SLAM tracker, useful for placing objects in SLAM type projects. 
 * On the Editor, this function returns the intersection point between the mouse cursor and a plane placed and the center of the world pointing towards (0,1,0).
 * 
 * @returns {Vector3} 
 */
declare function getIntersectionPointSLAM(): Entiti.Vector3;
/**
 * Returns the current SLAM tracking state. Possible values : 'none', 'low' and 'normal'.
 * 
 * @returns {String} 
 */
declare function getTrackingStateSLAM(): String;


//#region Static Classes

declare enum materialType {
    VIDEO = 1,
    DIFFUSE,
    PBR
}
declare enum lightType {
    Directional = 1,
    Spot,
    Point
}

declare var Vector3: {
    prototype: Entiti.Vector3;
    new(): Entiti.Vector3;
    new(x: Number, y: Number, z: Number): Entiti.Vector3;


    //Static Vector3 functions

    /**
     * Returns a dot product of vec1 & vec2.
     * 
     * @param {Vector3} vec1
     * @param {Vector3} vec2
     * @returns {Number}
     */
    dot(vec1: Entiti.Vector3, vec2: Entiti.Vector3): Number;
    /**
     * Returns a cross product of vec1 & vec2.
     * 
     * @param {Vector3} vec1 
     * @param {Vector3} vec2 
     * @returns {Number} 
     */
    cross(vec1: Entiti.Vector3, vec2: Entiti.Vector3): Number;
    /**
     * Returns a new Vector3 representing the linear interpolation between vec1 and vec2, by t which is a value between 0 and 1.
     * 
     * @param {Vector3} from 
     * @param {Vector3} to 
     * @param {Number} t 
     * @returns {Vector3} 
     */
    lerp(from: Entiti.Vector3, to: Entiti.Vector3, t: Number): Entiti.Vector3;
    /**
     * Returns a new Vector3 which is the result of adding vec1 and vec2.
     * 
     * @param {Vector3} vec1 
     * @param {Vector3} vec2 
     * @returns {Vector3} 
     */
    add(vec1: Entiti.Vector3, vec2: Entiti.Vector3): Entiti.Vector3;
    /**
     * Returns a new Vector3 which is the result of subtracting vec1 by vec2.
     * 
     * @param {Vector3} vec1 
     * @param {Vector3} vec2 
     * @returns {Vector3} 
     */
    subtract(vec1: Entiti.Vector3, vec2: Entiti.Vector3): Entiti.Vector3;
    /**
     * Returns a new Vector3 which is the result of multiplying vec1 by vec2.
     * 
     * @param {Vector3} vec1 
     * @param {Vector3} vec2 
     * @returns {Vector3} 
     */
    multiply(vec1: Entiti.Vector3, vec2: Entiti.Vector3): Entiti.Vector3;
    /**
     * Returns a new Vector3 which is the result of multiplying vec by a scalar.
     * 
     * @param {Vector3} vec 
     * @param {Number} scalar 
     * @returns {Vector3} 
     */
    multiply(vec: Entiti.Vector3, scalar: Number): Entiti.Vector3;
    /**
     * Returns a new Vector3 which is the result of dividing vec by a scalar.
     * 
     * @param {Vector3} vec 
     * @param {Number} scalar 
     * @returns {Vector3} 
     */
    divide(vec: Entiti.Vector3, scalar: Number): Entiti.Vector3;
	
	/**
     * Returns the distance between two vectors.
     * 
     * @param {Vector3} vec 
     * @param {Vector3} vec2 
     * @returns {Number} 
     */
    distance(vec: Entiti.Vector3, vec2: Entiti.Vector3): Number;
	
    /**
     * Shorthand for 'new Vector3(0, 1, 0)' (read only).
     * 
     * @type {Vector3}
     */
    readonly up: Entiti.Vector3;
    /**
     * Shorthand for 'new Vector3(1, 0, 0)' (read only).
     * 
     * @type {Vector3}
     */
    readonly right: Entiti.Vector3;
    /**
     * Shorthand for 'new Vector3(0, 0, 1)' (read only).
     * 
     * @type {Vector3}
     */
    readonly forward: Entiti.Vector3;
}

declare var Color: {
    /**
     * Returns a new Color representing the linear interpolation between color1 and color2, by t which is a value between 0 and 1. 
     * 
     * @param {Color} color1 
     * @param {Color} color2 
     * @param {Number} time 
     * @returns {Entiti.Color} 
     */
    lerp(color1: Entiti.Color, color2: Entiti.Color, time: Number): Entiti.Color;
    /**
     * Returns a new Color which is the result of adding color1 and color2.
     * 
     * @param {Color} color1 
     * @param {Color} color2 
     * @returns {Entiti.Color} 
     */
    add(color1: Entiti.Color, color2: Entiti.Color): Entiti.Color;
    /**
     * Returns a new Color which is the result of subtracting color1 by color2.
     * 
     * @param {Color} color1 
     * @param {Color} color2 
     * @returns {Entiti.Color} 
     */
    subtract(color1: Entiti.Color, color2: Entiti.Color): Entiti.Color;
    /**
     * Returns a new Color which is the result of multiplying color1 by color2.
     * 
     * @param {Color} color1 
     * @param {Color} color2 
     * @returns {Entiti.Color} 
     */
    multiply(color1: Entiti.Color, color2: Entiti.Color): Entiti.Color;
    /**
     * Returns a new Color which is the result of multiplying a color by a scalar.
     * 
     * @param {Color} color
     * @param {Number} scalar 
     * @returns {Entiti.Color}
     */
    multiply(color: Entiti.Color, scalar: Number): Entiti.Color;
    /**
     * Returns a new Color which is the result of dividing a color by a scalar.
     * 
     * @param {Color} color1 
     * @param {Number} scalar 
     * @returns {Entiti.Color} 
     */
    divide(color: Entiti.Color, scalar: Number): Entiti.Color;
}

declare var Camera: {
    /**
     * The camera’s position in world space (Read only).
     * 
     * @type {Vector3}
     */
    readonly position: Entiti.Vector3;
    /**
     * The camera’s rotation in world space, represented by euler angles (Read only).
     * 
     * @type {Vector3}
     */
    readonly rotation: Entiti.Vector3;
    /**
     * The camera’s forward direction (Read only).
     * 
     * @type {Vector3}
     */
    readonly forward: Entiti.Vector3;
    /**
     * The camera’s right direction (Read only).
     * 
     * @type {Vector3}
     */
    readonly right: Entiti.Vector3;
    /**
     * The camera’s up direction (Read only).
     * 
     * @type {Vector3}
     */
    readonly up: Entiti.Vector3;
	
	/**
	 * Returns the intersection point between a ray cast from the center of the screen to the plane generated by the SLAM tracker, useful for placing objects in SLAM type projects. 
	 * On the Editor, this function returns the intersection point between the mouse cursor and a plane placed and the center of the world pointing towards (0,1,0).
	 * 
	 * @returns {Vector3} 
	 */
	declare function getIntersectionPointSLAM(): Entiti.Vector3;
	
		/**
	 * Returns the intersection rotation between a ray cast from the center of the screen to the plane generated by the SLAM tracker, useful for placing objects in SLAM type projects.  
	 * @returns {Vector3} 
	 */
	declare function getIntersectionRotationSLAM(): Entiti.Vector3;
}
/**
 * Log class for writing messages to the console log (Editor) or the device log (mobile).
 * 
 */
declare var Log: {
    /**
     * Prints a message to the console log (Editor) or the device log (mobile).
     * 
     * @param {String} message 
     */
    printMessage(message: String): void;
    /**
     * Prints an error to the console log (Editor) or the device log (mobile).
     * 
     * @param {String} error 
     */
    printError(error: String): void;
}
//#endregion

/**
 * Class which contains application-wide utility functions
 * 
 */
declare var Application: {
    /**
     * Opens the url in a new page with the default browser.
     * 
     * @param {String} url 
     */
    openURL(url: String): void;

}
//#endregion

/**
 * Class which grants access to read user input
 * 
 */
declare var Input: {
    /**
     * The number of currently active screen touches (mobile). On the Editor, the left mouse button will be considered as a single touch.
     * 
     * @type {Number}
     */
    readonly touchCount: Number;
}
//#endregion

declare namespace Entiti {

    export interface Object {
        /**
         * The name of the object, as it appears in the editor.
         * 
         * @type {String}
         */
        name: String;
        /**
         * An id that is unique to this object (read only).
         * 
         * @type {Number}
         */
        readonly id: Number;
        /**
         * Weather the object is currently enabled.
         * 
         * @type {boolean}
         */
        enabled: boolean;
        /**
         * The transform component of this object (read only).
         * 
         * @type {Transform}
         */
        readonly transform: Transform;
        /**
         * 	The animation component of this object if it has one, null otherwise (read only).
         * 
         * @type {Animation}
         */
        readonly animation: Animation;
        /**
         * The audio component of this object if it has one, null otherwise (read only).
         * 
         * @type {Audio}
         */
        readonly audio: Audio;
        /**
         * The light component of this object if it has one, null otherwise (read only).
         * 
         * @type {Light}
         */
        readonly light: Light;
        /**
         * The mesh component of this object if it has one, null otherwise (read only).
         * 
         * @type {Mesh}
         */
        readonly mesh: Mesh;
    }

    export interface Transform {
		/**
         * The parent object of this transform
         * 
         * @type {Object}
         */
		parent : Entiti.Object;
        /**
         * The transform's position in world space
         * 
         * @type {Vector3}
         */
        position: Entiti.Vector3;
        /**
         * The transform's position in local space
         * 
         * @type {Vector3}
         */
        localPosition: Entiti.Vector3;
        /**
         * The transform’s scale in local space.
         * 
         * @type {Vector3}
         */
        localScale: Entiti.Vector3;
        /**
         * The transform’s rotation in world space, represented by euler angles.
         * 
         * @type {Vector3}
         */
        rotation : Entiti.Vector3;
        /**
         * The transform’s rotation in local space, represented by euler angles.
         * 
         * @type {Vector3}
         */
        localRotation: Entiti.Vector3;
        /**
         * The number of children in the transform (read only).
         * 
         *
         * @type {Number}
         */
        readonly childCount: Number;
        /**
         * The Object which is the owner of this transform component (read only).
         * 
         * @type {Object}
         */
        readonly object: Object;
        /**
         * The transform’s up direction (read only).
         * 
         * 
         * @type {Vector3}
         */
        readonly up: Entiti.Vector3;
        /**
         * The transform’s right direction (read only).
         * 
         * 
         * @type {Vector3}
         */
        readonly right: Entiti.Vector3;
        /**
         * The transform’s forward direction (read only).
         * 
         * 
         * @type {Vector3}
         */
        readonly forward: Entiti.Vector3;
        /**
         * Rotates the transform by the specified degrees around the specified axis.
         * 
         * @param {Number} degress 
         * @param {Vector3} axis 
         */
        rotate(degress: Number, axis: Entiti.Vector3): void;
        /**
         * Rotates the transform so that its forward direction points towards the specified position.
         * 
         * @param {Vector3} position 
         */
        lookAt(position: Entiti.Vector3): void;
        /**
         * Translates the transform in the specified direction.
         * 
         * @param {Vector3} direction 
         */
        translate(direction: Entiti.Vector3): void;
        /**
         * Adds the specified childTransform as a child of this transform. This will remove childTransform from its current parent should it have one.
         * 
         * @param {Transform} childTransform 
         */
        addChild(childTransform: Transform): void;
        /**
         * Removes the specified childTransform from the Transform’s child list. You should save a reference for this Transform for accessing it afterwards.
         * 
         * @param {Transform} childTransform 
         */
        removeChild(childTransform: Transform): void;
        /**
         * Returns a child object by the specified name, or null if no child was found.
         * 
         * @param {String} name - The object's name to search for.
         * @param {Boolean} searchInChildren - Determines whether the search should be recursive.
         * @returns {Transform} 
         */
        getChildByName(name: String, searchInChildren: Boolean): Entiti.Object;
        /**
         * Returns a child object by the specified index, or null if no child exists at that index.
         * 
         * @param {Number} index
         * @returns {Trasnform} 
         */
        getChildByIndex(index: Number): Entiti.Object;
    }

    export interface Animation {
		
		/**
         * The Object which is the owner of this animation component (read only).
         * 
         * @type {Object}
         */
        readonly object: Object;
        /**
         * Starts playing the animation.
         * 
         */
        play(): void;
        /**
         * Pauses the animation. Playing it again will pick it from where it was paused.
         * 
         */
        pause(): void;
        /**
         * Stops the animation, resetting it to its first frame.
         * 
         */
        stop(): void;
        /**
         * Whether the animation is currently playing or not.
         * 
         * @returns {boolean} true if the animation is being played, false otherwise
         */
        isPlaying(): boolean;
        /**
         * Returns an AnimationClip with the specified name or null if no clip is found.
         * 
         * @param {String} name 
         * @returns {Animationclip} 
         */
        getClipByName(name: String): Animationclip;
        /**
         * 	Returns an AnimationClip by the specified index.
         * 
         * @param {Number} index 
         * @returns {AnimationClip} 
         */
        getClipByIndex(index: Number): AnimationClip;
        /**
         * Determines whether the animation should loop on end, or not.
         * 
         * @type {boolean}
         */
        loop: boolean;
        /**
         * The current time in the AnimationClip. Runs from 0 to the ‘length’ property of the AnimationClip.
         * 
         * @type {Number}
         */
        time: Number;
        /**
         * The number of clips stored in the animation (Read only).
         * 
         * @type {Number}
         */
        readonly clipCount: Number;
        /**
         * The currently set animationClip.
         * 
         * @type {AnimationClip}
         */
        clip: AnimationClip;
    }

    export interface AnimationClip {
        /**
         * How long the clip runs for (in seconds) (Read only).
         * 
         * @type {Number}
         */
        readonly length: Number;
        /**
         * 	Holds the clip’s name (Read only).
         * 
         * @type {String}
         */
        readonly name: String;
    }
    export interface Audio {
		 /**
         * The Object which is the owner of this audio component (read only).
         * 
         * @type {Object}
         */
        readonly object: Object;
        /**
         * Starts playing the audio clip.
         * 
         */
        play(): void;
        /**
         * Pauses the audio clip. Playing it again will pick it from where it was paused.
         * 
         */
        pause(): void;
        /**
         * Stops the audio clip, resetting it to the beginning.
         * 
         */
        stop(): void;
        /**
         * Whether the audio clip is currently playing or not.
         * 
         * @returns {boolean} true if the audio clip is being played, false otherwise.
         */
        isPlaying(): boolean;
        /**
         * Determines whether the audio should loop on end, or not.
         * 
         * @type {boolean}
         */
        loop: boolean;
        /**
         * Determines the volume of the audio clip. Clamped between 0 and 1.
         * 
         * @type {Number}
         */
        volume: Number;
        /**
         * Determines the pitch of the audio clip.
         * 
         * @type {Number}
         */
        pitch: Number;

    }

    export interface Light {
		        /**
         * The Object which is the owner of this light component (read only).
         * 
         * @type {Object}
         */
        readonly object: Object;
        /**
         * Holds the light color property.
         * 
         * @type {Color}
         */
        color : Entiti.Color;
        /**
         * Holds the light intensity property.
         * 
         * @type {Number}
         */
        intensity : Number;
        /**
         * Holds the light radius property.
         * 
         * @type {Number}
         */
        radius : Number;
        /**
         * Holds the light type.
         * 
         * @type {lightType}
         * @memberof Light
         */
        type : lightType;
    }

    export interface Mesh {
		/**
         * The Object which is the owner of this mesh component (read only).
         * 
         * @type {Object}
         */
        readonly object: Object;

        /**
         * Returns the material by the specified index, or null if no material exists. The returned material returns as an instance of the correct material type.
         * 
         * @param {Number} index 
         * @returns {MaterialBase} 
         */
        getMaterialByIndex(index: Number): GenericMaterial;
        /**
         * Returns the material by the specified name, or null if no material exists. The returned material returns as an instance of the correct material type.
         * 
         * @param {String} name 
         * @returns {MaterialBase}
         */
        getMaterialByName(name: String): GenericMaterial;
        /**
         * Holds the number of materials held by the mesh (Read Only).
         * 
         * @type {Number}
         * @memberof Mesh
         */
        readonly materialCount: Number;
    }
    export interface Vector3 {
        /**
         * The X component of this vector.
         * 
         * @type {Number}
         */
        x: Number;
        /**
         * The Y component of this vector.
         * 
         * @type {Number}
         */
        y: Number;
        /**
         * The Z component of this vector.
         * 
         * @type {Number}
         */
        z: Number;

        /**
         * Normalize this vector, which causes it to become a 'unit vector' of length=1.
         * 
         */
        normalize(): void;
        /**
         * Add vec to this vector.
         * 
         */
        add(vec: Entiti.Vector3): void;
        /**
         * Subtract vec from this vector.
         * 
         */
        subtract(vec: Entiti.Vector3): void;
        /**
         * Multiply this vector by vec.
         * 
         */
        multiply(vec: Entiti.Vector3): void;
        /**
         * Multiply this vector by a scalar.
         * 
         */
        multiply(scalar: Number): void;
        /**
         * Divide this vector by a scalar.
         * 
         */
        divide(scalar: Number): void;
        /**
        * A Vector3 which is a normalized (unit vector) representation of this vector (read only).
        * 
        * @type {Vector3}
        */
        readonly normalized: Entiti.Vector3;
        /**
        * The Length of this vector (read only).
        * 
        * @type {Number}
        */
        readonly length: Number;
    }

    export interface Color {
        /**
         * Red component of the Color.
         * 
         * @type {Number}
         */
        r: Number;
        /**
         * Green component of the Color.
         * 
         * @type {Number}
         */
        g: Number;
        /**
         * Blue component of the Color.
         * 
         * @type {Number}
         */
        b: Number;
        /**
         * Alpha component of the Color.
         * 
         * @type {Number}
         */
        a: Number;
        /**
         * Add color to this color.
         * 
         * @param {Color} color 
         */
        add(color: Entiti.Color): void;
        /**
         * Subtract color from this color.
         * 
         * @param {Color} color 
         */
        substract(color: Entiti.Color): void;
        /**
         * Multiply this color by color.
         * 
         * @param {Color} color 
         */
        multiply(color: Entiti.Color): void;
        /**
         * Multiply this color by a scalar.
         * 
         * @param {Number} scalar 
         */
        multiply(scalar: Number): void;
        /**
         * Divide this color by a scalar.
         * 
         * @param {Number} scalar
         */
        divide(scalar: Number): void;
    }

    export interface MaterialBase {
        /**
         * Holds the material diffuse color property.
         * 
         * @type {Color}
         * @memberof MaterialBase
         */
        diffuse: Entiti.Color;
        /**
         * Holds the material type (Read only).
         * 
         * @type {materialType}
         * @memberof MaterialBase
         */
        readonly type: materialType;
        /**
         * Holds the material name (Read only).
         * 
         * @type {String}
         * @memberof MaterialBase
         */
        readonly name: String;
    }

    export interface DiffuseMaterial extends MaterialBase {
    }

    export interface VideoMaterial extends MaterialBase {
        /**
         * Starts playing the video.
         * 
         * @memberof VideoMaterial
         */
        playVideo(): void;
        /**
         * Pauses the video. Playing it again will pick it from where it was paused.
         * 
         * @memberof VideoMaterial
         */
        pauseVideo(): void;
        /**
         * Stops the video, resetting it to the beginning.
         * 
         * @memberof VideoMaterial
         */
        stopVideo(): void;
		/**
         * Whether the video is currently playing or not.
         * 
         * @returns {boolean} true if the video is being played, false otherwise.
         */
        isPlaying(): void;
		/**
         * Determines whether the video should loop on end, or not.
         * 
         * @type {boolean}
         */
        loop: boolean;
        /**
         * Determines the volume of the video clip. Clamped between 0 and 1.
         * 
         * @type {Number}
         */
        volume: Number;
    }

    export interface PBRMaterial extends MaterialBase {
        /**
         * Holds the material metallicness property.
         * 
         * @type {Number}
         * @memberof PBRMaterial
         */
        metallic: Number;
        /**
         * Holds the material roughness property.
         * 
         * @type {Number}
         * @memberof PBRMaterial
         */
        roughness: Number;
        /**
         * Holds the material emissive color property.
         * 
         * @type {Color}
         * @memberof PBRMaterial
         */
        emissive: Entiti.Color;
        /**
         * Holds the material normal strength property.
         * 
         * @type {Number}
         * @memberof PBRMaterial
         */
        normalStrength: Number;
    }

    export interface GenericMaterial extends DiffuseMaterial, PBRMaterial, VideoMaterial {

    }
}