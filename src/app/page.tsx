"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { regionMap, regions } from '../utils/regionMap';

const Home = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [summorName, setSummorName] = useState<string>('');
  const [summonerData, setSummonerData] = useState<any | null>(null);
  const [tagLine, setTagLine] = useState<string>('');
  const [region, setRegion] = useState<string>('na');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
	setSummonerData(null);

	if (!summorName || !tagLine) {
	  setError(true);
	  setErrorMessage('Please enter a valid summoner name and tagline');
	  setLoading(false);
	  return;
	}

    try {
      const regionCode = regionMap[region.toLowerCase()];
      if (!regionCode) {
		setError(true);
		setErrorMessage('Invalid region');
        throw new Error('Invalid region');
      }

      const response = await axios.post('/api/summoner', { gameName: summorName, tagLine, region: regionCode });
      const data: any = await response.data;
      setSummonerData(data.summonerData);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = (regionCode: string) => {
    setRegion(regionCode);
    setDropdownOpen(false);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <form className="flex flex-col md:flex-row items-center bg-white shadow-md rounded p-6 mb-6" onSubmit={handleSubmit}>
        <div className="flex items-center relative m-2">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="h-10 bg-blue-100 text-blue-600 border-none flex items-center px-3 after:h-0 after:w-0 after:absolute after:top-1/2 after:right-1 after:transform after:-translate-y-1/2 after:border-x-4 after:border-x-transparent after:border-t-[4px] after:border-t-blue-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{regions.find(r => r.code === region)?.code}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded z-10 max-h-60 overflow-y-auto">
                {regions.map((r) => (
                  <button
                    key={r.code}
                    type="button"
                    className="flex items-center p-2 hover:bg-gray-200 w-full"
                    onClick={() => handleRegionChange(r.code)}
                  >
                    <Image src={r.icon} alt={r.name} width={24} height={24} />
                    <span className="ml-2 text-sm">{r.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            className="border-2 border-gray-300 p-2 m-2 rounded-l-none rounded-r w-full md:w-auto"
            type="text"
            placeholder="Enter summoner name"
            value={summorName}
            onChange={(e) => setSummorName(e.target.value)}
          />
        </div>
        <input
          className="border-2 border-gray-300 p-2 m-2 rounded w-full md:w-auto"
          type="text"
          placeholder="Enter tag line"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 m-2 rounded hover:bg-blue-600" type="submit">Search</button>
      </form>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{errorMessage}</p>}
      {summonerData && <div className="bg-white shadow-md rounded p-6"> 
        {
		<>
			<div>{summonerData.id}</div>
			<div>{summonerData.accountId}</div>
			<div>{summonerData.puuid}</div>
			<div>{summonerData.profileIconId}</div>
			<div>{summonerData.summonerLevel}</div>
		</>
		}
      </div>}
    </main>
  );
};

export default Home;
