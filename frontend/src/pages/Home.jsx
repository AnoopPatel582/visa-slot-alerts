import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAlerts } from "../api/alerts";

import AlertForm from "../components/AlertForm";
import AlertList from "../components/AlertList";

const Home = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchAlerts = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const res = await getAlerts({ page: pageNumber, limit: 5 });

      setAlerts(res.data);
      setPage(res.pagination.page);
      setTotalPages(res.pagination.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts(page);
  }, [page]);


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

        <AlertForm onCreate={() => fetchAlerts(1)} />

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <AlertList
            alerts={alerts}
            onStatusChange={() => fetchAlerts(page)}
            onDelete={() => fetchAlerts(page)}
          />

        )}

        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded transition cursor-pointer
      ${page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
          >
            Previous
          </button>

          <span className="text-sm">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded transition cursor-pointer
      ${page === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
          >
            Next
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default Home;
