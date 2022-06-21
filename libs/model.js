import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import Constants from "./constants"

const onLoad = (obj, scene, options) => {
	const {receiveShadow, castShadow} = options

	obj.name = Constants.MODEL_NAME
	obj.position.x = Constants.MODEL_POSITIONING_X
	obj.position.y = Constants.MODEL_POSITIONING_Y
	obj.receiveShadow = receiveShadow
	obj.castShadow = castShadow

	scene.add(obj)
	obj.traverse((child)=>{
		if(child.isMech){
			child.castShadow = castShadow
			child.receiveShadow = receiveShadow
		}
	})
}

export function loadGLTFModel(
	scene,
	glbPath,
	options = Constants.DEFAULT_OPTONS
){
	return new Promise((resolve, reject)=>{
		const loader = new GLTFLoader()

		loader.load(
			glbPath,
			gltf => {
				const obj = gltf.scene
				onLoad(obj, scene, options)
				resolve()
			},
			undefined,
			function(error){
				reject(error)
			}
		)
	})
}