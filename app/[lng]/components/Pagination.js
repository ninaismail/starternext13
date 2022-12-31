const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

 return (
  <>
  {Array.isArray(pages)&&pages.map((page) => (
    <button      
      key={page}
      className={`w-1/10 px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      ${ page === currentPage ? 'bg-gray-100 text-gray-700' : 'text-gray-500 bg-white' }`}
      onClick={() => onPageChange(page)}>
        {page}
    </button>
  ))}     
  </>
 );
};

export default Pagination;