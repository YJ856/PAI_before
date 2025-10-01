// 1�� shared-types ����0
export type * from '@shared-types';

// `��� � �� ��
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}

//  ��� ��
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;