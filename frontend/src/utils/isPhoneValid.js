export default function isPhoneValid(phone) {
  const regex = /^\(\d{2}\) (\d{1})?(\d{4})-(\d{4})$/;
  return regex.test(phone);
}
