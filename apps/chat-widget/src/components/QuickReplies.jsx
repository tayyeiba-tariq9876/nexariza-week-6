const QuickReplies = ({ replies, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {replies.map((reply, index) => (
        <button
          key={index}
          onClick={() => onSelect(reply)}
          className="px-3 py-1.5 text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-xl hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-200 transform hover:scale-105"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
