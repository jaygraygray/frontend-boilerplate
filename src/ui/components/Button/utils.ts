export function parseBootstrapClassName(
  string: "small" | "medium" | "large"
): string | undefined {
  switch (string) {
    case "small":
      return "btn-sm";
    case "medium":
      return "btn-md";
    case "large":
      return "btn-lg";
    default:
      return undefined;
  }
}

type ButtonActionTypes =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "link";

// output needs to be btn-outline-primary or btn-primary
// based on boolean input
export function modifyBootStrapButtonClassname(
  isOutline = false,
  actionType: ButtonActionTypes
): string {
  switch (actionType) {
    case "primary":
      return isOutline ? "btn-outline-primary" : "btn-primary";
    case "secondary":
      return isOutline ? "btn-outline-secondary" : "btn-secondary";
    case "success":
      return isOutline ? "btn-outline-success" : "btn-success";
    case "danger":
      return isOutline ? "btn-outline-danger" : "btn-danger";
    case "warning":
      return isOutline ? "btn-outline-warning" : "btn-warning";
    case "info":
      return isOutline ? "btn-outline-info" : "btn-info";
    case "link":
      return isOutline ? "btn-outline-link" : "btn-link";
    default:
      return "btn-primary";
  }
}
