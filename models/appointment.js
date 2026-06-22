import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
    concern: { type: String, default: "" },
    additionalInfo: { type: String, default: "" },
    status: { 
      type: String, 
      enum: ["new", "contacted", "scheduled", "completed", "cancelled"],
      default: "new"
    },
    notes: { type: String, default: "" },
    preferredDate: { type: Date },
    source: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
