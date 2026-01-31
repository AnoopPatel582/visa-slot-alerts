import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getAlerts,
  createAlert,
  updateAlertStatus,
  deleteAlert,
} from "../api/alerts";

import AlertForm from "../components/AlertForm";
import AlertList from "../components/AlertList";

const Home = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAlerts = async () => {
    setLoading(true);
    try {
      const data = await getAlerts();
      setAlerts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-100 p-4"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-center">
          Visa Slot Alerts
        </h1>

        <AlertForm onCreate={fetchAlerts} />

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <AlertList
            alerts={alerts}
            onStatusChange={fetchAlerts}
            onDelete={fetchAlerts}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
