// components/Footer.tsx
import Link from 'next/link';
import React from 'react';

interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    isNew?: boolean;
  }[];
}

const Footer: React.FC = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Product',
      links: [
        { label: 'Overview', href: '/overview' },
        { label: 'Features', href: '/features' },
        { label: 'Solutions', href: '/solutions', isNew: true },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Releases', href: '/releases' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'News', href: '/news' },
        { label: 'Media kit', href: '/media-kit' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Newsletter', href: '/newsletter' },
        { label: 'Events', href: '/events' },
        { label: 'Help centre', href: '/help' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Use cases',
      links: [
        { label: 'Startups', href: '/startups' },
        { label: 'Enterprise', href: '/enterprise' },
        { label: 'Government', href: '/government' },
        { label: 'SaaS', href: '/saas' },
        { label: 'Marketplaces', href: '/marketplaces' },
        { label: 'Ecommerce', href: '/ecommerce' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'AngelList', href: 'https://angellist.com' },
        { label: 'Dribbble', href: 'https://dribbble.com' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Cookies', href: '/cookies' },
        { label: 'Licenses', href: '/licenses' },
        { label: 'Settings', href: '/settings' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerColumns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.label}
                      {link.isNew && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center mr-2">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <span className="text-gray-800 font-medium">Trade</span>
          </div>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} Tradepluse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;