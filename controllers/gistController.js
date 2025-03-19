const Gist = require("../models/Gist");

// ✅ Create Gist
exports.createGist = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newGist = new Gist({ title, content });
        await newGist.save();
        res.status(201).json(newGist);
    } catch (error) {
        res.status(500).json({ error: "Failed to create gist" });
    }
};

// ✅ Get Gist by ID
exports.getGist = async (req, res) => {
    try {
        const gist = await Gist.findById(req.params.id);
        if (!gist) return res.status(404).json({ error: "Gist not found" });
        res.json(gist);
    } catch (error) {
        res.status(500).json({ error: "Failed to get gist" });
    }
};

// ✅ Update Gist
exports.updateGist = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedGist = await Gist.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        if (!updatedGist) return res.status(404).json({ error: "Gist not found" });
        res.json(updatedGist);
    } catch (error) {
        res.status(500).json({ error: "Failed to update gist" });
    }
};

// ✅ Delete Gist
exports.deleteGist = async (req, res) => {
    try {
        const deletedGist = await Gist.findByIdAndDelete(req.params.id);
        if (!deletedGist) return res.status(404).json({ error: "Gist not found" });
        res.json({ message: "Gist deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete gist" });
    }
};

// ✅ List All Gists
exports.listGists = async (req, res) => {
    try {
        const gists = await Gist.find();
        res.json(gists);
    } catch (error) {
        res.status(500).json({ error: "Failed to list gists" });
    }
};
