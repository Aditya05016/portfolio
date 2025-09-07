export default function Footer() {
  return (
    <footer className="py-8 text-center bg-gradient-to-br from-gray-900 to-black text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8">
        <p>© {new Date().getFullYear()} Aditya Sharma. All Rights Reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}