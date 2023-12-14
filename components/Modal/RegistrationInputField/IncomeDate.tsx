export default function IncomeDate({
  set,
  incomeDate,
}: {
  set: any;
  incomeDate?: Date;
}) {
  const formatDate = (date: Date | undefined) => {
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고, 두 자리로 맞춤
      const day = String(date.getDate()).padStart(2, "0"); // 일을 두 자리로 맞춤

      return `${year}-${month}-${day}`;
    }
    return "";
  };

  return (
    <input
      type="date"
      value={formatDate(incomeDate)}
      className="border border-gray-300 hover:border-gray-600 rounded px-2 py-2 focus:outline-none focus:border-[#7D8DA7] bg-white"
      onChange={(e) => set(new Date(e.target.value))}
    />
  );
}
