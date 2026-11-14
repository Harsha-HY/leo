import React, { useState } from 'react';
import { X, Copy, Check, Heart, ShieldCheck } from 'lucide-react';
import { pptData } from '../data/pptData';
import { useTheme } from '../context/ThemeContext';

export default function DonationModal({ isOpen, onClose }) {
  const { theme } = useTheme();
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  if (!isOpen) return null;

  const org = pptData.organization;
  const bank = org.bankDetails;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    if (field === 'acc') {
      setCopiedAcc(true);
      setTimeout(() => setCopiedAcc(false), 2000);
    } else {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-lg max-h-[92vh] overflow-y-auto ${theme.cardBg} border ${theme.border} rounded-3xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-scaleUp`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 w-8 h-8 rounded-full ${theme.subBg} ${theme.text} flex items-center justify-center transition-colors`}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div
            style={{
              backgroundColor: theme.accentLight,
              color: theme.accent,
              borderColor: theme.accentBorder
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>50% Tax Exemption Under Section 80G</span>
          </div>
          <h3 className={`text-2xl font-bold ${theme.text} font-display`}>
            Donate to Praja Pragati Trust
          </h3>
          <p className={`text-xs ${theme.textMuted} leading-relaxed`}>
            Support our grassroots programs across South India. Transfer funds securely via NEFT, RTGS, IMPS, or UPI directly to our official Canara Bank account.
          </p>
        </div>

        {/* Bank Account Card */}
        <div className={`p-5 rounded-2xl ${theme.subBg} border ${theme.border} space-y-3.5 text-xs`}>
          <div className={`flex items-center justify-between pb-2 border-b ${theme.border}`}>
            <span className={`font-medium ${theme.textMuted}`}>Beneficiary Name:</span>
            <span className={`font-bold ${theme.text}`}>{bank.accountName}</span>
          </div>

          <div className={`flex items-center justify-between pb-2 border-b ${theme.border}`}>
            <span className={`font-medium ${theme.textMuted}`}>Bank & Branch:</span>
            <span className={`text-right font-medium ${theme.text}`}>{bank.bankName}, {bank.branch}</span>
          </div>

          <div className={`flex items-center justify-between p-3.5 rounded-xl ${theme.cardBg} border ${theme.border}`}>
            <div>
              <span className={`text-[10px] ${theme.textMuted} font-mono block uppercase`}>Account Number</span>
              <span style={{ color: theme.accent }} className="text-base font-mono font-extrabold">{bank.accountNumber}</span>
            </div>
            <button
              onClick={() => copyToClipboard(bank.accountNumber, 'acc')}
              className="px-3 py-1.5 rounded-lg bg-[#151515] dark:bg-white text-white dark:text-[#151515] font-medium transition-colors flex items-center gap-1 text-xs"
            >
              {copiedAcc ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAcc ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className={`flex items-center justify-between p-3.5 rounded-xl ${theme.cardBg} border ${theme.border}`}>
            <div>
              <span className={`text-[10px] ${theme.textMuted} font-mono block uppercase`}>IFSC Code</span>
              <span className={`text-sm font-mono font-bold ${theme.text}`}>{bank.ifscCode}</span>
            </div>
            <button
              onClick={() => copyToClipboard(bank.ifscCode, 'ifsc')}
              className={`px-3 py-1.5 rounded-lg ${theme.subBg} ${theme.text} border ${theme.border} font-medium transition-colors flex items-center gap-1 text-xs`}
            >
              {copiedIfsc ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIfsc ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* 80G Tax Exemption Note */}
        <div
          style={{
            backgroundColor: theme.accentLight,
            borderColor: theme.accentBorder
          }}
          className="p-4 rounded-2xl border text-xs space-y-1.5"
        >
          <div style={{ color: theme.accent }} className="flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Tax Exemption Credentials:</span>
          </div>
          <p className={`${theme.textMuted} leading-relaxed`}>
            • 80G Order: <strong className={theme.text}>AAATP8682K25HY02</strong> (Valid to 2032)<br />
            • 12A Order: <strong className={theme.text}>AAATP8682K25HY01</strong> (Valid to 2037)<br />
            • For your stamped 80G Form 10BE receipt, email transfer screenshot with donor PAN to <span className={`font-semibold ${theme.text} font-mono`}>{org.emailPrimary}</span>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={onClose}
            className={`w-full py-2.5 rounded-full text-xs font-semibold ${theme.textMuted} ${theme.subBg} border ${theme.border} transition-colors`}
          >
            Close Window
          </button>
          <a
            href={`mailto:${org.emailPrimary}?subject=Donation%20Receipt%20Request`}
            onClick={onClose}
            style={{ backgroundColor: theme.accent }}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-center text-white hover:opacity-90 transition-colors shadow-xs"
          >
            Email For Receipt
          </a>
        </div>
      </div>
    </div>
  );
}
