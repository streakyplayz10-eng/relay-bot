import { useLogs } from "@/hooks/use-logs";
import { format } from "date-fns";
import { Terminal, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Logs() {
  const { data: logs, isLoading } = useLogs();

  if (isLoading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto pb-24 md:pb-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <Terminal className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">System Logs</h1>
          <p className="text-muted-foreground">Real-time forwarding history</p>
        </div>
      </div>

      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 bg-white/5">
                <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider w-24">Status</th>
                <th className="p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider w-48">Time</th>
