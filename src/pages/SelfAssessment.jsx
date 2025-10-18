import React from 'react';
import { FileText } from 'lucide-react';

const SelfAssessment = () => {
  return (
    <div className="bg-white rounded-lg shadow p-12 text-center">
      <FileText className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
      <h2 className="text-2xl font-bold text-slate-800 mb-4">企业自评估</h2>
      <p className="text-slate-600">企业可在此进行自评估（演示版本未开放功能）</p>
    </div>
  );
};

export default SelfAssessment;