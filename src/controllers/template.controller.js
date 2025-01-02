

const generateDLTemplate = async (req, res) => {
    try {
        const data = req.body; // Driving license data
        const ipfsUrl = await licenseService.generateAndUploadLicense(data);
        res.json({ message: "PDF generated and uploaded to Pinata", url: ipfsUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred", details: error.message });
    }
};
module.exports = {
    generateDLTemplate
}