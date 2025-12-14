export function intentAgent(input) {
  let intent = "general";

  if (/education|college|study/i.test(input)) intent = "education";
  else if (/home|house|property/i.test(input)) intent = "home";
  else if (/business|startup/i.test(input)) intent = "business";
  else if (/car|vehicle/i.test(input)) intent = "vehicle";

  return {
    intent,
    log: `Intent Agent classified request as ${intent} loan`,
  };
}
