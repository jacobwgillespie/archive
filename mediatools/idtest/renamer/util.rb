class String
  # return character array of string with indices
  def each_char_with_index
    i = 0
    split(//).each do |c|
      yield i, c
      i += 1
    end
  end
end

class String
  # get ngrams of string
  def ngrams(len = 1)
    ngrams = []
    len = size if len > size
    (0..size - len).each do |n|
      ng = self[n...(n + len)]
      ngrams.push(ng)
    end
    ngrams
  end
end



module Renamer
  class Util
    class << self
      def similarity(str1, str2)
        dice_coefficient(str1, str2)
      end

      def basic(str1, str2)
        str1 = str1.dup
        str2 = str2.dup
        str1.downcase!

        pairs1 = (0..str1.length-2).collect do |i|
          str1[i,2]
        end.reject do |pair|
          pair.include? " "
        end

        str2.downcase!

        pairs2 = (0..str2.length-2).collect do |i|
          str2[i,2]
        end.reject do |pair|
          pair.include? " "
        end

        union = pairs1.size + pairs2.size
        intersection = 0
        pairs1.each do |p1|
          0.upto(pairs2.size-1) do |i|
            if p1 == pairs2[i]
              intersection += 1
              pairs2.slice!(i)
              break
            end
          end
        end
        (2.0 * intersection) / union
      end

      def hamming_distance(str1, str2)
        str1.split(//).zip(str2.split(//)).inject(0) { |h, e| e[0]==e[1] ? h+0 : h+1 }
      end

      def damerau_levenshtein(str1, str2)
        d = Array.new(str1.size+1){Array.new(str2.size+1)}
        for i in (0..str1.size)
          d[i][0] = i
        end
        for j in (0..str2.size)
          d[0][j] = j
        end
        str1.each_char_with_index do |i,c1|
          str2.each_char_with_index do |j,c2|
            c = (c1 == c2 ? 0 : 1)
            d[i+1][j+1] = [
              d[i][j+1] + 1, #deletion
              d[i+1][j] + 1, #insertion
              d[i][j] + c].min #substitution
            if (i>0) and (j>0) and (str1[i]==str2[j-1]) and (str1[i-1]==str2[j])
              d[i+1][j+1] = [
                d[i+1][j+1],
                d[i-1][j-1] + c].min #transposition
            end
          end
        end
        d[str1.size][str2.size]
      end

      def dice_coefficient(str1, str2)
        str1_2grams = str1.ngrams(2)
        str2_2grams = str2.ngrams(2)
        intersection = (str1_2grams & str2_2grams).length
        total = str1_2grams.length + str2_2grams.length
        dice  = 2.0 * intersection / total
      end

      def levenshtein(str1, str2)
        return str1.length if 0 == str2.length
        return str2.length if 0 == str1.length
        c = Array.new
        c << (str1[0] == str2[0] ? 0 : 1) + (levenshtein str1[1..-1], str2[1..-1])
        c << 1 + levenshtein(str1[1..-1], str2)
        c << 1 + levenshtein(str1, str2[1..-1])
        return c.min
      end


    end
  end
end