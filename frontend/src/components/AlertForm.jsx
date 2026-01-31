import { useState } from "react";
import { createAlert } from "../api/alerts";

const AlertForm = ({ onCreate }) => {
    const [formData, setFormData] = useState({
        country: "",
        city: "",
        visaType: "Tourist",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await createAlert(formData);
            setFormData({ country: "", city: "", visaType: "Tourist" });
            onCreate(1);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-lg shadow space-y-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    required
                    className="border p-2 rounded"
                />

                <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="border p-2 rounded"
                />

                <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option>Tourist</option>
                    <option>Business</option>
                    <option>Student</option>
                </select>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    {loading ? "Creating..." : "Create Alert"}
                </button>
            </div>

        </form>
    );
};

export default AlertForm;
