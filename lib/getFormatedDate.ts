export default function getFormatedDate(dateString: string): string {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
