import restaurant from "../model/restaurantmodel.js"
export const createrestaurant = async(req,res) =>{
    try{
        const restaurantdata = restaurant(req.body)
        if(!restaurantdata){
            return res.status(404).json({message:"Restaurant data not found"});
        }
        await restaurantdata.save();
        res.status(200).json({message:"Successfully created restaurant"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

};
// export default createrestaurant;
export const getAll = async(req,res)=>{
    try{
    const restaurantdata=await restaurant.find()
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export const getOne = async(req,res)=>{
    try{
        const id=req.params.id;
        const restaurantdata=await restaurant.findById(id)
    if(!restaurantdata){
        return res.status(404).json({msg:"Restaurant data not found"});
        }
    res.status(200).json(restaurantdata);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export const upDate = async (req, res) => {
    try {
        const id = req.params.id;
        const restaurantData = await restaurant.findById(id);

        if (!restaurantData) {
            return res.status(404).json({ msg: "Restaurant data not found" });
        }

        const updatedData = await restaurant.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const DeleteRest = async (req, res) => {
    try {
        const id = req.params.id;
        const restaurantData = await restaurant.findById(id);

        if (!restaurantData) {
            return res.status(404).json({ msg: "Restaurant data not found" });
        }

        const DeletedData = await restaurant.findByIdAndDelete(id);
        return res.status(200).json(DeletedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

