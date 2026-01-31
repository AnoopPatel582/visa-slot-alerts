import { motion } from "framer-motion";
import {
  updateAlertStatus,
  deleteAlert,
} from "../api/alerts";

const AlertList = ({ alerts, onStatusChange, onDelete }) => {
  if (alerts.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No alerts found
      </p>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">Visa Type</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert._id} className="border-t">
                <td className="p-3">{alert.country}</td>
                <td className="p-3">{alert.city}</td>
                <td className="p-3">{alert.visaType}</td>
                <td className="p-3">
                  <select
                    value={alert.status}
                    onChange={async (e) => {
                      await updateAlertStatus(
                        alert._id,
                        e.target.value
                      );
                      onStatusChange();
                    }}
                    className="border p-1 rounded cursor-pointer"
                  >
                    <option>Active</option>
                    <option>Booked</option>
                    <option>Expired</option>
                  </select>
                </td>
                <td className="p-3">
                  <button
                    onClick={async () => {
                      await deleteAlert(alert._id);
                      onDelete();
                    }}
                    // className="text-red-600 hover:underline"
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {alerts.map((alert) => (
          <motion.div
            key={alert._id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow space-y-2"
          >
            <div className="font-semibold">
              {alert.country} — {alert.city}
            </div>
            <div>Visa: {alert.visaType}</div>

            <select
              value={alert.status}
              onChange={async (e) => {
                await updateAlertStatus(
                  alert._id,
                  e.target.value
                );
                onStatusChange();
              }}
              className="border p-2 rounded w-full cursor-pointer"
            >
              <option>Active</option>
              <option>Booked</option>
              <option>Expired</option>
            </select>

            <button
              onClick={async () => {
                await deleteAlert(alert._id);
                onDelete();
              }}
            //   className="text-red-600 text-sm"
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition cursor-pointer"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AlertList;
