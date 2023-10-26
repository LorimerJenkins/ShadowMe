import React, { createContext, useState } from 'react';

interface UserDetails {
  at_hash: string;
  aud: string;
  contract_id: string;
  email: string;
  email_verified: boolean;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  nickname: string;
  nonce: string;
  picture: string;
  sid: string;
  sub: string;
  updated_at: string;
}

interface AuthContextProps {
  userDetails: UserDetails | null;
  setUserDetails: (userDetails: UserDetails | null) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  userDetails: null,
  setUserDetails: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
